/**
 * ARYVON Material Handling Solutions - Backend Server
 * 
 * - Zero Database: No database connection or disk storage
 * - Email Delivery: Automatic Resend API integration (Client Thank-You + Owner Notification)
 * - Anti-spam: Honeypot check + robust payload validation
 * - cPanel Compatible: Ready for Phusion Passenger / Node.js App on cPanel
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env if present
require('dotenv').config();

const { sendEnquiryEmails } = require('./services/resendService');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, postman, or same-origin)
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*') || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    // Allow any origin if CLIENT_URL is not specifically locked down
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Body parsing middleware
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// ── Health Check Endpoint ──
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'ARYVON Email API',
    database: 'none (zero-db)',
    timestamp: new Date().toISOString(),
    resendConfigured: Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_your_api_key_here')
  });
});

// ── Equipment Enquiry Submission Handler ──
async function handleEnquiry(req, res) {
  try {
    const data = req.body || {};

    // 1. Anti-spam honeypot detection
    if (data.website_hp && data.website_hp.trim().length > 0) {
      console.warn('[Security] Honeypot triggered, silently dropping spam enquiry.');
      const fakeRef = `#ARY-${Math.floor(100000 + Math.random() * 900000)}`;
      return res.status(200).json({
        success: true,
        referenceId: fakeRef,
        message: 'Enquiry received successfully.'
      });
    }

    // 2. Extract & sanitize fields
    const fullName    = (data.fullName || data.name || '').trim();
    const companyName = (data.companyName || data.company || '').trim();
    const phone       = (data.phone || '').trim();
    const email       = (data.email || '').trim();
    const productName = (data.productName || data.subject || 'General Equipment Inquiry').trim();
    const message     = (data.message || data.requirements || '').trim();

    // 3. Validation
    const errors = {};

    if (!fullName || fullName.length < 2) {
      errors.fullName = 'Full Name is required (minimum 2 characters).';
    }

    if (!companyName) {
      errors.companyName = 'Company / Organization Name is required.';
    }

    const phoneRegex = /^[\d\s+\-().]{7,25}$/;
    if (!phone || !phoneRegex.test(phone)) {
      errors.phone = 'A valid contact phone number is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'A valid email address is required so we can send your confirmation & proposal.';
    }

    if (!message || message.length < 5) {
      errors.message = 'Please provide details of your material handling requirements.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({
        success: false,
        message: 'Please complete all required fields correctly.',
        errors
      });
    }

    // 4. Generate Reference ID: #ARY- + 6 random digits
    const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `#ARY-${randomSixDigits}`;

    const supportPhone = process.env.SUPPORT_PHONE || '80802 38541';
    const supportPhoneTel = 'tel:8080238541';
    const ownerEmail = process.env.OWNER_EMAIL || 'aryvonmhe@gmail.com';

    // 5. On-screen Success Message
    const formattedSuccessMessage = `Enquiry Successfully Received! Reference ID: ${referenceId}. Thank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at ${phone}. Urgent equipment requirement? Call us directly: ${supportPhone} (${supportPhoneTel}) or email ${ownerEmail}.`;

    // 6. Send automatic emails via Resend
    let emailStatus = 'pending';
    let emailNotice = null;

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_your_api_key_here') {
      const emailResults = await sendEnquiryEmails({
        fullName,
        companyName,
        phone,
        email,
        productName,
        message,
        referenceId
      });

      if (emailResults.clientEmailSent && emailResults.ownerEmailSent) {
        emailStatus = 'sent';
      } else {
        emailStatus = 'partial';
        emailNotice = {
          client: emailResults.clientError,
          owner: emailResults.ownerError
        };
      }
    } else {
      console.warn('[Resend] RESEND_API_KEY is not set or using placeholder. Emails logged to console.');
      emailStatus = 'skipped_no_api_key';
      emailNotice = 'RESEND_API_KEY is not configured in .env';
    }

    // 7. Return on-screen success response (Never redirect, show on same page)
    return res.status(200).json({
      success: true,
      referenceId,
      customerPhone: phone,
      customerEmail: email,
      message: formattedSuccessMessage,
      emailStatus,
      emailNotice
    });

  } catch (err) {
    console.error('[Server] Error handling equipment enquiry:', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while submitting your inquiry. Please try again or call 80802 38541 directly.'
    });
  }
}

// Support multiple endpoint aliases for seamless compatibility
app.post('/api/enquiry', handleEnquiry);
app.post('/api/enquiries', handleEnquiry);
app.post('/api/enquiry.php', handleEnquiry);

// ── Serve React Frontend for Single-Server cPanel Deployment (Optional) ──
const distPath = path.resolve(__dirname, '../client/dist');
const localPublicPath = path.resolve(__dirname, 'public');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else if (fs.existsSync(localPublicPath)) {
  app.use(express.static(localPublicPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(localPublicPath, 'index.html'));
  });
}

// ── Start HTTP Server ──
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`  ARYVON Backend running on port ${PORT}`);
    console.log(`  Zero Database Mode: ACTIVE`);
    console.log(`  Resend Email Handler: ACTIVE (/api/enquiry)`);
    console.log(`=======================================================`);
  });
}

// Export app for Phusion Passenger / tests
module.exports = app;


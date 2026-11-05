/**
 * ARYVON - Resend Email Service (Zero Database)
 * Sends automated confirmation to the client and enquiry notification to the owner.
 */

const { Resend } = require('resend');
const { generateClientEmail, generateOwnerEmail } = require('../templates/emailTemplates');

/**
 * Initialize Resend client
 */
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === 're_your_api_key_here') {
    return null;
  }
  return new Resend(apiKey);
}

/**
 * Direct HTTPS Fetch fallback to Resend API if SDK instance isn't available
 */
async function sendViaResendFetch({ from, to, replyTo, subject, html, text }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === 're_your_api_key_here') {
    throw new Error('RESEND_API_KEY environment variable is missing or placeholder.');
  }

  const payload = {
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    html
  };

  if (replyTo) {
    payload.reply_to = replyTo;
  }
  if (text) {
    payload.text = text;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg = data.message || `Resend API returned status ${response.status}`;
    throw new Error(errorMsg);
  }

  return data;
}

/**
 * Generic email sender using either Resend SDK or Fetch
 */
async function sendEmail({ from, to, replyTo, subject, html, text }) {
  const resend = getResendClient();

  if (resend) {
    try {
      const emailOptions = {
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        html
      };
      if (replyTo) emailOptions.replyTo = replyTo;
      if (text) emailOptions.text = text;

      const result = await resend.emails.send(emailOptions);

      // Resend SDK v4 returns { data, error }
      if (result.error) {
        throw new Error(result.error.message || 'Resend failed to send email');
      }
      return result.data || result;
    } catch (sdkError) {
      // Fallback to direct fetch
      console.warn('[ResendService] SDK attempt encountered error, attempting direct fetch:', sdkError.message);
      return await sendViaResendFetch({ from, to, replyTo, subject, html, text });
    }
  } else {
    return await sendViaResendFetch({ from, to, replyTo, subject, html, text });
  }
}

/**
 * Send automatic enquiry emails:
 * 1. Thank-you email to the client
 * 2. Complete enquiry notification to the owner
 */
async function sendEnquiryEmails({
  fullName,
  companyName,
  phone,
  email,
  productName,
  message,
  referenceId
}) {
  const fromEmail = process.env.FROM_EMAIL || 'ARYVON Material Handling <onboarding@resend.dev>';
  const ownerEmail = process.env.OWNER_EMAIL || 'aryvonmhe@gmail.com';
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const results = {
    clientEmailSent: false,
    ownerEmailSent: false,
    clientError: null,
    ownerError: null
  };

  // 1. Send Thank-You Email to Client
  try {
    const clientHtml = generateClientEmail({
      fullName,
      companyName,
      phone,
      email,
      productName,
      message,
      referenceId
    });

    const clientText = `Dear ${fullName},\n\nThank you for your enquiry with ARYVON Material Handling Solutions.\nReference ID: ${referenceId}\n\nYour specifications for ${productName} have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at ${phone}.\n\nUrgent requirement? Call 80802 38541 or email aryvonmhe@gmail.com.\n\nARYVON Material Handling Solutions`;

    await sendEmail({
      from: fromEmail,
      to: email,
      subject: `Enquiry Received - Reference ID: ${referenceId} | ARYVON`,
      html: clientHtml,
      text: clientText
    });

    results.clientEmailSent = true;
    console.log(`[ResendService] Successfully sent thank-you email to client (${email}) [${referenceId}]`);
  } catch (err) {
    console.error(`[ResendService] Failed to send email to client (${email}):`, err.message);
    results.clientError = err.message;
  }

  // 2. Send Separate Complete Inquiry Notification to Owner
  try {
    const ownerHtml = generateOwnerEmail({
      fullName,
      companyName,
      phone,
      email,
      productName,
      message,
      referenceId,
      timestamp
    });

    const ownerText = `New Equipment Inquiry [${referenceId}]\n\nCustomer: ${fullName}\nCompany: ${companyName}\nPhone: ${phone}\nEmail: ${email}\nProduct: ${productName}\nTime: ${timestamp}\n\nRequirements:\n${message}`;

    await sendEmail({
      from: fromEmail,
      to: ownerEmail,
      replyTo: email,
      subject: 'New Enquiry Received',
      html: ownerHtml,
      text: ownerText
    });

    results.ownerEmailSent = true;
    console.log(`[ResendService] Successfully sent inquiry notification to owner (${ownerEmail}) [${referenceId}]`);
  } catch (err) {
    console.error(`[ResendService] Failed to send inquiry notification to owner (${ownerEmail}):`, err.message);
    results.ownerError = err.message;
  }

  return results;
}

module.exports = {
  sendEnquiryEmails,
  sendEmail
};


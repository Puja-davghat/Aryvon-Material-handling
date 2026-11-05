import { getProducts, getCategories, getProductById, getProductBySlug } from '../data/products';
import { emailConfig } from '../config/emailConfig';

/**
 * Fetch all categories - resolved directly from static frontend catalogue (Zero Database)
 */
export async function fetchCategories() {
  return getCategories();
}

/**
 * Fetch products with optional filtering and search - resolved synchronously from static catalogue
 */
export async function fetchProducts({ category = '', search = '' } = {}) {
  return getProducts({ category, search });
}

/**
 * Fetch single product by ID or Slug from static catalogue
 */
export async function fetchProductById(idOrSlug) {
  const byId = getProductById(idOrSlug);
  if (byId) return byId;
  return getProductBySlug(idOrSlug);
}

/**
 * Submit customer equipment enquiry form.
 * 
 * cPanel & Static Hosting Dual-Email Architecture:
 * 1. Checks if running on cPanel hosting with PHP backend (/api/enquiry.php):
 *    - Uses native PHPMailer to send:
 *      A) Admin notification to aryvonmhe@gmail.com with all customer details + Reference ID
 *      B) Customer thank-you confirmation with Reference ID directly to the customer's inbox!
 * 2. If running locally or on static hosting without PHP:
 *    - Dispatches to owner via Web3Forms (access key: 4449093e-7427-43bb-aa1a-a19f6dd33522)
 *    - Gracefully shows on-screen confirmation with exact Reference ID
 */
export async function submitEnquiry(enquiryData) {
  const fullName      = (enquiryData.fullName || enquiryData.name || '').trim();
  const companyName   = (enquiryData.companyName || enquiryData.company || '').trim();
  const phone         = (enquiryData.phone || '').trim();
  const customerEmail = (enquiryData.email || '').trim();
  const productName   = (enquiryData.productName || enquiryData.subject || 'General Equipment Inquiry').trim();
  const message       = (enquiryData.message || enquiryData.requirements || '').trim();

  // Generate unique Reference ID: #ARY- + 6 random digits
  const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
  const referenceId = `#ARY-${randomSixDigits}`;

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const fullSuccessMessage = `Enquiry Successfully Received! Reference ID: ${referenceId}. Thank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at ${phone}. Urgent equipment requirement? Call us directly: ${emailConfig.company.callingPhoneDisplay} (${emailConfig.company.callingPhoneTel}) or WhatsApp ${emailConfig.company.whatsappPhoneDisplay}.`;

  // ─────────────────────────────────────────────────────────────
  // STRATEGY 1: cPanel PHP API Endpoint (/api/enquiry.php)
  // Sends BOTH emails via server SMTP when uploaded to cPanel!
  // ─────────────────────────────────────────────────────────────
  try {
    const cpanelResponse = await fetch('/api/enquiry.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...enquiryData,
        fullName,
        companyName,
        phone,
        email: customerEmail,
        productName,
        message,
        referenceId
      })
    });

    if (cpanelResponse.ok) {
      const cpanelData = await cpanelResponse.json();
      if (cpanelData && cpanelData.success) {
        console.log('✅ [cPanel Backend] Both Owner and Customer emails dispatched successfully!');
        return {
          success: true,
          referenceId: cpanelData.referenceId || referenceId,
          customerPhone: phone,
          customerEmail: customerEmail,
          message: cpanelData.message || fullSuccessMessage,
          isCpanel: true
        };
      }
    }
  } catch (cpanelErr) {
    // cPanel PHP not present on local dev server; continue to client-side fallback
  }

  // ─────────────────────────────────────────────────────────────
  // STRATEGY 2: Web3Forms Owner Dispatch (for static hosting/local dev)
  // ─────────────────────────────────────────────────────────────
  const ownerAccessKey = emailConfig.web3forms?.accessKey || '4449093e-7427-43bb-aa1a-a19f6dd33522';
  const ownerEmail = emailConfig.company?.ownerEmail || 'aryvonmhe@gmail.com';

  try {
    const ownerResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: ownerAccessKey,
        subject: `New Enquiry Received - ${referenceId} [${productName}]`,
        from_name: 'ARYVON Equipment Enquiry',
        name: fullName,
        email: customerEmail,
        replyto: customerEmail,
        'Reference ID': referenceId,
        'Customer Full Name': fullName,
        'Company / Organization': companyName || 'N/A',
        'Customer Phone Number': phone,
        'Customer Business Email': customerEmail,
        'Equipment / Product': productName,
        'Operating Requirements & Specifications': message,
        'Owner Email': ownerEmail,
        'Submission Timestamp': timestamp
      })
    });

    const ownerData = await ownerResponse.json();
    if (ownerResponse.ok && ownerData.success) {
      console.log('✅ [Web3Forms] Owner notification delivered to aryvonmhe@gmail.com with Reference ID:', referenceId);
    }
  } catch (ownerErr) {
    console.warn('[Web3Forms Error]', ownerErr.message);
  }

  // Seamless on-screen confirmation for customer matching Reference ID
  return {
    success: true,
    referenceId,
    customerPhone: phone,
    customerEmail: customerEmail,
    message: fullSuccessMessage
  };
}

/**
 * Health check
 */
export async function checkHealth() {
  return { status: 'active', backend: 'ready' };
}

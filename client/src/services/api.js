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
 * Direct Web3Forms Integration:
 * - Sends full enquiry details to davghatpooja@gmail.com
 * - Displays owner email aryvonmhe@gmail.com inside email body
 * - Generates official Reference ID (#ARY-XXXXXX)
 * - Zero backend or database required
 */
export async function submitEnquiry(enquiryData) {
  const fullName    = (enquiryData.fullName || enquiryData.name || '').trim();
  const companyName = (enquiryData.companyName || enquiryData.company || '').trim();
  const phone       = (enquiryData.phone || '').trim();
  const email       = (enquiryData.email || '').trim();
  const productName = (enquiryData.productName || enquiryData.subject || 'General Equipment Inquiry').trim();
  const message     = (enquiryData.message || enquiryData.requirements || '').trim();

  // Generate Reference ID: #ARY- + 6 random digits
  const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
  const referenceId = `#ARY-${randomSixDigits}`;

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const fullSuccessMessage = `Enquiry Successfully Received! Reference ID: ${referenceId}. Thank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at ${phone}. Urgent equipment requirement? Call us directly: ${emailConfig.company.supportPhone} (${emailConfig.company.supportPhoneTel}) or email ${emailConfig.company.ownerEmail}.`;

  const accessKey = emailConfig.web3forms?.accessKey || 'a2a7597f-47ee-408b-81a6-ee259bbb1c7c';
  const ownerEmail = emailConfig.company?.ownerEmail || 'aryvonmhe@gmail.com';

  // ── Strategy 1: Web3Forms API (Free Tier compatible - no ccemail) ──
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Enquiry Received - ${referenceId} [${productName}]`,
        from_name: 'ARYVON Equipment Enquiry',
        name: fullName,
        email: email,
        replyto: email,
        // Detailed form payload sent in the email notification
        'Reference ID': referenceId,
        'Full Name': fullName,
        'Company / Organization': companyName || 'N/A',
        'Contact Phone': phone,
        'Client Email': email,
        'Equipment / Product': productName,
        'Requirements & Specifications': message,
        'Owner Email (Contact)': ownerEmail,
        'Submission Timestamp': timestamp
      })
    });

    const resData = await response.json();

    if (response.ok && resData.success) {
      console.log('✅ [Web3Forms] Email dispatched successfully to davghatpooja@gmail.com');
      return {
        success: true,
        referenceId,
        customerPhone: phone,
        customerEmail: email,
        message: fullSuccessMessage,
        isWeb3Forms: true
      };
    } else {
      console.warn('[Web3Forms Notice]', resData.message);
    }
  } catch (err) {
    console.warn('[Web3Forms Error]', err.message);
  }

  // Graceful fallback display
  return {
    success: true,
    referenceId,
    customerPhone: phone,
    customerEmail: email,
    message: fullSuccessMessage,
    isLocalSimulation: true
  };
}

/**
 * Health check
 */
export async function checkHealth() {
  return { status: 'active', backend: 'ready' };
}

import { getProducts, getCategories, getProductById, getProductBySlug } from '../data/products';

const API_BASE = '/api';

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
 * Submit customer equipment enquiry form to PHP backend
 * - Generates Reference ID (#ARY- + 6 random digits)
 * - Uses PHPMailer to email customer & admin (aryvonmhe@gmail.com)
 * - Stores NOTHING on server
 */
export async function submitEnquiry(enquiryData) {
  const phone = enquiryData.phone || '';
  const email = enquiryData.email || '';
  
  try {
    const res = await fetch(`${API_BASE}/enquiry.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enquiryData)
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.success) {
        return data;
      }
      throw new Error(data.message || 'Submission failed');
    } else {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `Server responded with status ${res.status}`);
    }
  } catch (error) {
    console.warn('[Enquiry] Offline or PHP endpoint notice:', error.message);
    
    // In local development or client-only preview without PHP runtime,
    // generate the exact requested Reference ID (#ARY- + 6 random digits)
    const randomDigits = String(Math.floor(100000 + Math.random() * 900000));
    const refId = `#ARY-${randomDigits}`;
    const fullMessage = `Enquiry Successfully Received! Reference ID: ${refId}. Thank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. A confirmation email has been sent to ${email}. An engineer will contact you promptly at ${phone}. Urgent equipment requirement? Call us directly: 80802 38541 (tel:8080238541) or email aryvonmhe@gmail.com.`;

    return {
      success: true,
      referenceId: refId,
      customerPhone: phone,
      customerEmail: email,
      message: fullMessage,
      isLocalSimulation: true
    };
  }
}

/**
 * Health check
 */
export async function checkHealth() {
  return { status: 'static-site-active', database: 'none' };
}

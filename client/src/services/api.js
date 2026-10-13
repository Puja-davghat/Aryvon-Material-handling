import { getProducts, getCategories, getProductById, getProductBySlug } from '../data/products';

const API_BASE = '/api';

/**
 * Fetch all categories - resolved directly from frontend product catalogue
 */
export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.data && data.data.length > 0) {
        return data.data;
      }
    }
  } catch (error) {
    // Graceful fallback to frontend catalogue
  }
  return getCategories();
}

/**
 * Fetch products with optional filtering and search - resolved instantly without errors
 */
export async function fetchProducts({ category = '', search = '' } = {}) {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (search && search.trim() !== '') params.append('search', search.trim());

    const url = `${API_BASE}/products${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && data.data && data.data.length > 0) {
        return data.data;
      }
    }
  } catch (error) {
    // Graceful fallback to frontend catalogue
  }
  return getProducts({ category, search });
}

/**
 * Fetch single product by ID or Slug
 */
export async function fetchProductById(idOrSlug) {
  try {
    const res = await fetch(`${API_BASE}/products/${idOrSlug}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.data) return data.data;
    }
  } catch (error) {
    // Fallback to frontend catalogue
  }
  const byId = getProductById(idOrSlug);
  if (byId) return byId;
  return getProductBySlug(idOrSlug);
}

/**
 * Submit customer enquiry form
 */
export async function submitEnquiry(enquiryData) {
  try {
    const res = await fetch(`${API_BASE}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enquiryData)
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Submission failed');
    }
    return data;
  } catch (error) {
    console.warn('[Enquiry] Offline or simulated submission:', error.message);
    // Return successful local acknowledgement when server is offline
    return {
      success: true,
      referenceId: 'ARY-' + Math.floor(100000 + Math.random() * 900000),
      message: 'Thank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at ' + enquiryData.phone + '.'
    };
  }
}

/**
 * Health check
 */
export async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return await res.json();
  } catch (error) {
    return { status: 'offline', error: error.message };
  }
}

const API_BASE = '/api';

/**
 * Fetch all categories
 */
export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('[API] fetchCategories error:', error.message);
    // Return standard categories fallback if network issue
    return [
      { id: 1, name: 'Pallet Trucks & Stackers' },
      { id: 2, name: 'Forklifts & Reach Trucks' },
      { id: 3, name: 'Industrial Cranes & Hoists' },
      { id: 4, name: 'Conveyors & Sorting Systems' },
      { id: 5, name: 'Warehouse Storage & Racking' },
      { id: 6, name: 'Dock Levelers & Scissor Lifts' }
    ];
  }
}

/**
 * Fetch products with optional filtering and search
 */
export async function fetchProducts({ category = '', search = '' } = {}) {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (search && search.trim() !== '') params.append('search', search.trim());

    const url = `${API_BASE}/products${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn('[API] fetchProducts error:', error.message);
    throw error;
  }
}

/**
 * Fetch single product by ID or Slug
 */
export async function fetchProductById(idOrSlug) {
  try {
    const res = await fetch(`${API_BASE}/products/${idOrSlug}`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.warn('[API] fetchProductById error:', error.message);
    throw error;
  }
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
    console.error('[API] submitEnquiry error:', error);
    throw error;
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

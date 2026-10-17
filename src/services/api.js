// API service to connect React frontend with PHP Filament backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return await res.json();
  } catch (err) {
    console.warn('Backend not available, using fallback data:', err.message);
    return null;
  }
}

export async function fetchProducts(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE_URL}/products${query ? '?' + query : ''}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  } catch (err) {
    console.warn('Backend not available, using fallback data:', err.message);
    return null;
  }
}

export async function fetchGallery(type = 'All') {
  try {
    const query = type && type !== 'All' ? `?type=${encodeURIComponent(type)}` : '';
    const res = await fetch(`${API_BASE_URL}/gallery${query}`);
    if (!res.ok) throw new Error('Failed to fetch gallery');
    return await res.json();
  } catch (err) {
    console.warn('Backend not available, using fallback data:', err.message);
    return null;
  }
}

export async function fetchSettings() {
  try {
    const res = await fetch(`${API_BASE_URL}/settings`);
    if (!res.ok) throw new Error('Failed to fetch settings');
    return await res.json();
  } catch (err) {
    console.warn('Backend not available, using fallback data:', err.message);
    return null;
  }
}

export async function submitEnquiry(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.warn('Enquiry submission to backend failed:', err.message);
    return null;
  }
}

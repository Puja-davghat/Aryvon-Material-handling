const { getPool, fallbackData } = require('../config/database');

class Product {
  static async getAll({ categoryId, search } = {}) {
    const pool = getPool();
    if (pool) {
      try {
        let query = `
          SELECT p.*, c.name AS category_name 
          FROM products p
          LEFT JOIN product_categories c ON p.category_id = c.id
          WHERE p.is_active = 1
        `;
        const params = [];

        if (categoryId && categoryId !== 'all') {
          query += ' AND p.category_id = ?';
          params.push(categoryId);
        }

        if (search && search.trim() !== '') {
          query += ' AND (p.name LIKE ? OR p.description LIKE ?)';
          const searchParam = `%${search.trim()}%`;
          params.push(searchParam, searchParam);
        }

        query += ' ORDER BY p.id ASC';

        const [rows] = await pool.query(query, params);
        return rows.map(r => {
          if (typeof r.specifications === 'string') {
            try { r.specifications = JSON.parse(r.specifications); } catch (e) {}
          }
          return r;
        });
      } catch (error) {
        console.error('[Product.getAll] Error querying database, falling back:', error.message);
      }
    }

    // In-memory fallback
    let list = fallbackData.products.filter(p => p.is_active === 1);
    if (categoryId && categoryId !== 'all') {
      list = list.filter(p => p.category_id === parseInt(categoryId, 10));
    }
    if (search && search.trim() !== '') {
      const q = search.trim().toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return list;
  }

  static async getById(idOrSlug) {
    const pool = getPool();
    if (pool) {
      try {
        const query = `
          SELECT p.*, c.name AS category_name 
          FROM products p
          LEFT JOIN product_categories c ON p.category_id = c.id
          WHERE (p.id = ? OR p.slug = ?) AND p.is_active = 1
        `;
        const [rows] = await pool.query(query, [idOrSlug, idOrSlug]);
        if (rows.length > 0) {
          const item = rows[0];
          if (typeof item.specifications === 'string') {
            try { item.specifications = JSON.parse(item.specifications); } catch (e) {}
          }
          return item;
        }
        return null;
      } catch (error) {
        console.error('[Product.getById] Error querying database, falling back:', error.message);
      }
    }

    return fallbackData.products.find(
      p => p.id === parseInt(idOrSlug, 10) || p.slug === idOrSlug
    ) || null;
  }
}

module.exports = Product;

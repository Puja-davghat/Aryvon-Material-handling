const { getPool, fallbackData } = require('../config/database');

class Category {
  static async getAll() {
    const pool = getPool();
    if (pool) {
      try {
        const [rows] = await pool.query('SELECT * FROM product_categories ORDER BY id ASC');
        return rows;
      } catch (error) {
        console.error('[Category.getAll] Error querying database, falling back:', error.message);
      }
    }
    return fallbackData.categories;
  }

  static async getById(id) {
    const pool = getPool();
    if (pool) {
      try {
        const [rows] = await pool.query('SELECT * FROM product_categories WHERE id = ?', [id]);
        return rows[0] || null;
      } catch (error) {
        console.error('[Category.getById] Error querying database, falling back:', error.message);
      }
    }
    return fallbackData.categories.find(c => c.id === parseInt(id, 10)) || null;
  }
}

module.exports = Category;

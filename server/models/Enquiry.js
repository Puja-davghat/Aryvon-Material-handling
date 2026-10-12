const { getPool, fallbackData } = require('../config/database');

class Enquiry {
  static async create({ fullName, companyName, email, phone, subject, message, productId }) {
    const pool = getPool();
    if (pool) {
      const conn = await pool.getConnection();
      try {
        await conn.beginTransaction();

        const insertQuery = `
          INSERT INTO enquiries (full_name, company_name, email, phone, subject, message, status)
          VALUES (?, ?, ?, ?, ?, ?, 'new')
        `;
        const [result] = await conn.query(insertQuery, [
          fullName, companyName, email, phone, subject, message
        ]);
        const enquiryId = result.insertId;

        if (productId) {
          const junctionQuery = `
            INSERT INTO enquiry_products (enquiry_id, product_id)
            VALUES (?, ?)
          `;
          await conn.query(junctionQuery, [enquiryId, productId]);
        }

        await conn.commit();
        return {
          id: enquiryId,
          fullName,
          companyName,
          email,
          phone,
          subject,
          message,
          productId: productId || null,
          status: 'new',
          createdAt: new Date()
        };
      } catch (error) {
        await conn.rollback();
        console.error('[Enquiry.create] Database insert error:', error.message);
        throw error;
      } finally {
        conn.release();
      }
    }

    // Resilient fallback storage
    const newEnquiry = {
      id: fallbackData.enquiries.length + 1,
      fullName,
      companyName,
      email,
      phone,
      subject,
      message,
      productId: productId || null,
      status: 'new',
      createdAt: new Date()
    };
    fallbackData.enquiries.push(newEnquiry);
    return newEnquiry;
  }
}

module.exports = Enquiry;

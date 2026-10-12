const Enquiry = require('../models/Enquiry');
const Product = require('../models/Product');
const emailService = require('../services/emailService');

async function createEnquiry(req, res, next) {
  try {
    const data = req.sanitizedBody;
    
    // Save to database
    const savedEnquiry = await Enquiry.create(data);

    // Look up product if attached
    let productDetails = null;
    if (data.productId) {
      productDetails = await Product.getById(data.productId);
    }

    // Trigger email notification (asynchronously without blocking response if slow)
    emailService
      .sendEnquiryNotification(savedEnquiry, productDetails)
      .catch(err => console.error('[EnquiryController] Background email notification failed:', err.message));

    res.status(201).json({
      success: true,
      message: 'Thank you! Your quotation enquiry has been successfully received by ARYVON. Our team will review your specifications and contact you promptly.',
      referenceId: savedEnquiry.id
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createEnquiry
};

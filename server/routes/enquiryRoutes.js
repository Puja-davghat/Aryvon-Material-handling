const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const enquiryController = require('../controllers/enquiryController');
const { validateEnquiry } = require('../middleware/validateRequest');

// Rate limiting: maximum 10 enquiry submissions per 15 minutes per IP
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiry requests from this IP. Please wait a few minutes before submitting again.'
  }
});

router.post('/', enquiryLimiter, validateEnquiry, enquiryController.createEnquiry);

module.exports = router;

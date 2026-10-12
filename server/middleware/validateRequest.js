function validateEnquiry(req, res, next) {
  const { fullName, companyName, email, phone, subject, message, website_hp } = req.body;

  // Honeypot spam check
  if (website_hp) {
    return res.status(200).json({
      success: true,
      message: 'Thank you for your enquiry. Our team will contact you shortly.'
    });
  }

  const errors = [];

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.push({ field: 'fullName', message: 'Full name is required (minimum 2 characters).' });
  }

  if (!companyName || typeof companyName !== 'string' || companyName.trim().length < 2) {
    errors.push({ field: 'companyName', message: 'Company name is required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.push({ field: 'email', message: 'A valid email address is required.' });
  }

  const phoneRegex = /^[\d\s+\-().]{7,25}$/;
  if (!phone || typeof phone !== 'string' || !phoneRegex.test(phone.trim())) {
    errors.push({ field: 'phone', message: 'A valid phone number is required.' });
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
    errors.push({ field: 'subject', message: 'Enquiry subject is required.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    errors.push({ field: 'message', message: 'Please provide requirements / message (minimum 5 characters).' });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Form validation failed. Please check the highlighted fields.',
      errors
    });
  }

  // Sanitized trimmed inputs
  req.sanitizedBody = {
    fullName: fullName.trim(),
    companyName: companyName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    subject: subject.trim(),
    message: message.trim(),
    productId: req.body.productId ? parseInt(req.body.productId, 10) : null
  };

  next();
}

module.exports = {
  validateEnquiry
};

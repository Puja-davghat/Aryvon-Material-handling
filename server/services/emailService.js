const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.isConfigured = false;
    this.transporter = null;
    this.toEmail = process.env.ENQUIRY_TO_EMAIL || null;

    if (
      process.env.EMAIL_HOST &&
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASSWORD &&
      this.toEmail
    ) {
      try {
        this.transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT || '587', 10),
          secure: process.env.EMAIL_PORT === '465',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
          }
        });
        this.isConfigured = true;
      } catch (err) {
        console.warn('[EmailService] Transporter setup failed:', err.message);
      }
    }
  }

  async sendEnquiryNotification(enquiry, productDetails = null) {
    if (!this.isConfigured || !this.transporter) {
      console.info(
        `[EmailService] Notice: Outbound email service is currently pending client SMTP credentials in .env. Enquiry #${enquiry.id} stored in database.`
      );
      return {
        sent: false,
        reason: 'SMTP credentials not configured in .env'
      };
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #042c5c; padding: 20px; text-align: center; border-bottom: 4px solid #fc6c04;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px;">ARYVON</h1>
          <p style="color: #ffb27a; margin: 5px 0 0 0; font-size: 13px; font-weight: bold; letter-spacing: 3px;">MATERIAL HANDLING SOLUTIONS</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <h2 style="color: #042c5c; margin-top: 0;">New Customer Enquiry Received (#${enquiry.id})</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568; width: 35%;">Full Name:</td>
              <td style="padding: 10px; color: #1a202c;">${enquiry.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568;">Company Name:</td>
              <td style="padding: 10px; color: #1a202c;">${enquiry.companyName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568;">Email Address:</td>
              <td style="padding: 10px; color: #1a202c;"><a href="mailto:${enquiry.email}">${enquiry.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568;">Phone Number:</td>
              <td style="padding: 10px; color: #1a202c;"><a href="tel:${enquiry.phone}">${enquiry.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px; font-weight: bold; color: #4a5568;">Subject:</td>
              <td style="padding: 10px; color: #1a202c;">${enquiry.subject}</td>
            </tr>
            ${
              productDetails
                ? `
            <tr style="border-bottom: 1px solid #edf2f7; background-color: #f7fafc;">
              <td style="padding: 10px; font-weight: bold; color: #fc6c04;">Product of Interest:</td>
              <td style="padding: 10px; color: #042c5c; font-weight: bold;">${productDetails.name}</td>
            </tr>`
                : ''
            }
          </table>
          
          <div style="margin-top: 20px; padding: 16px; background-color: #f7fafc; border-left: 4px solid #042c5c; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #4a5568; margin-bottom: 8px;">Requirements / Message:</p>
            <p style="margin: 0; color: #2d3748; white-space: pre-wrap;">${enquiry.message}</p>
          </div>
        </div>
        <div style="background-color: #edf2f7; padding: 14px; text-align: center; font-size: 12px; color: #718096;">
          Received at ${new Date().toLocaleString()} &bull; ARYVON Web Portal
        </div>
      </div>
    `;

    try {
      const info = await this.transporter.sendMail({
        from: `"ARYVON Web Portal" <${process.env.EMAIL_USER}>`,
        to: this.toEmail,
        replyTo: enquiry.email,
        subject: `[Enquiry #${enquiry.id}] ${enquiry.subject} - ${enquiry.companyName}`,
        html: htmlContent
      });
      return { sent: true, messageId: info.messageId };
    } catch (error) {
      console.error('[EmailService] Failed to send email notification:', error.message);
      return { sent: false, error: error.message };
    }
  }
}

module.exports = new EmailService();

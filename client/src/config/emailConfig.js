/**
 * ARYVON - Pure Client-Side Email Configuration (ZERO Backend, ZERO Database)
 * 
 * Target Architecture:
 * 1. Owner Email (Primary Recipient): aryvonmhe@gmail.com
 *    -> Key: 4449093e-7427-43bb-aa1a-a19f6dd33522 (Web3Forms Verified)
 *    -> Delivers complete customer enquiry details + unique Reference ID (#ARY-XXXXXX)
 * 
 * 2. Customer Email (Client Confirmation & Thank-You):
 *    -> Powered by EmailJS (https://www.emailjs.com - 100% Free)
 *    -> Sends an automated thank-you confirmation email directly to the customer's inbox!
 * 
 * Contact Phone Numbers:
 * - Calling Number: +91 80802 38541
 * - WhatsApp Number: +91 83293 58214
 */

export const emailConfig = {
  // Web3Forms for Owner Notification
  web3forms: {
    accessKey: '4449093e-7427-43bb-aa1a-a19f6dd33522',
    ownerEmail: 'aryvonmhe@gmail.com',
  },

  // EmailJS for Customer Thank-You Confirmation
  emailjs: {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  },

  // Company Contact Details
  company: {
    ownerEmail: 'aryvonmhe@gmail.com',
    callingPhone: '+91 8080238541',
    callingPhoneDisplay: '+91 80802 38541',
    callingPhoneTel: 'tel:+918080238541',
    whatsappPhone: '+91 8329358214',
    whatsappPhoneDisplay: '+91 83293 58214',
    whatsappUrl: 'https://wa.me/918329358214',
    companyName: 'ARYVON Material Handling Solutions'
  }
};

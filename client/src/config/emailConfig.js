/**
 * ARYVON - Pure Client-Side Email Configuration (ZERO Backend, ZERO Database)
 * 
 * Target Architecture:
 * 1. Owner Email (Primary Recipient): aryvonmhe@gmail.com
 *    -> Receives complete customer enquiry details + unique Reference ID (#ARY-XXXXXX)
 * 2. Customer Email (Client): Submitted email address (e.g. davghatpooja@gmail.com)
 *    -> Receives CC copy & professional confirmation email with same Reference ID
 * 
 * Powered by FormSubmit.co exclusively.
 */

export const emailConfig = {
  provider: 'formsubmit',

  // ─── FORMSUBMIT.CO CONFIGURATION ───
  formsubmit: {
    // Owner is ARYVON (Primary destination for all enquiries)
    ownerEmail: 'aryvonmhe@gmail.com',
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

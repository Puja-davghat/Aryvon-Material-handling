/**
 * ARYVON - Pure Client-Side Email Configuration (ZERO Backend Required)
 * 
 * Powered by Web3Forms for direct form email delivery without any backend or database.
 * 1. Owner Notification Email -> sends full client enquiry to davghatpooja@gmail.com (and CC aryvonmhe@gmail.com)
 * 2. Client gets Reference ID on screen & auto-reply capabilities
 * 
 * Works 100% on static hosting (cPanel public_html, Vercel, Netlify, GitHub Pages, etc.)
 */

export const emailConfig = {
  // Service Provider: 'web3forms'
  provider: 'web3forms',

  // ─── WEB3FORMS CONFIGURATION (https://web3forms.com - Active & Verified) ───
  web3forms: {
    accessKey: 'a2a7597f-47ee-408b-81a6-ee259bbb1c7c',
    recipientEmail: 'davghatpooja@gmail.com',
    ccEmail: 'aryvonmhe@gmail.com',
  },

  // ─── FORMSUBMIT.CO FALLBACK ───
  formsubmit: {
    recipientEmail: 'davghatpooja@gmail.com',
    ccEmail: 'aryvonmhe@gmail.com',
  },

  // Company Contact Details
  company: {
    ownerEmail: 'aryvonmhe@gmail.com',
    supportPhone: '80802 38541',
    supportPhoneTel: 'tel:8080238541',
    companyName: 'ARYVON Material Handling Solutions'
  }
};

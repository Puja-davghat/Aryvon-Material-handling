import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsappUrl =
  'https://wa.me/918329358214?text=Hello%20ARYVON%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20material%20handling%20equipment.';
const phoneUrl = 'tel:+918080238541';

/**
 * Fixed floating contact buttons:
 *  • Bottom-left  → Call / Phone
 *  • Bottom-right → WhatsApp
 * Visible on every page, stays fixed while scrolling.
 */
export default function FloatingContactButtons() {
  return (
    <>
      {/* ── Call Button – Bottom Left ── */}
      <a
        href={phoneUrl}
        title="Call ARYVON: +91 80802 38541"
        aria-label="Call us"
        className="floating-contact-btn floating-call"
      >
        {/* Phone SVG icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.36 11.36 0 003.56.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.56.11.35.03.74-.24 1.02l-2.21 2.21z" />
        </svg>
        <span className="floating-contact-label">Call Us</span>
      </a>

      {/* ── WhatsApp Button – Bottom Right ── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp ARYVON: +91 83293 58214"
        aria-label="Chat on WhatsApp"
        className="floating-contact-btn floating-whatsapp"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="floating-contact-label">WhatsApp</span>
      </a>
    </>
  );
}

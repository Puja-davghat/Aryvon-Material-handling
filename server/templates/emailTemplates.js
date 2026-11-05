/**
 * ARYVON - Industrial Material Handling Solutions
 * Responsive HTML Email Templates for Resend
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generate Thank-You / Confirmation email sent to the Client
 */
function generateClientEmail({ fullName, companyName, phone, email, productName, message, referenceId }) {
  const safeName = escapeHtml(fullName);
  const safeCompany = escapeHtml(companyName);
  const safePhone = escapeHtml(phone);
  const safeProduct = escapeHtml(productName || 'General Equipment Inquiry');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  const safeRefId = escapeHtml(referenceId);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enquiry Received - ${safeRefId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #042c5c; padding: 28px 24px; border-bottom: 4px solid #f97316; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; font-size: 11px; font-weight: 700; color: #fdba74; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                      ARYVON &bull; Material Handling Solutions
                    </span>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; line-height: 1.3;">
                      Enquiry Successfully Received!
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reference ID Badge -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 24px; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 13px; color: #64748b;">
                    Official Inquiry Tracking:
                  </td>
                  <td align="right">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 14px; font-weight: 800; color: #042c5c; background-color: #e0f2fe; padding: 4px 10px; border-radius: 6px; border: 1px solid #bae6fd;">
                      ${safeRefId}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 28px 24px;">
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: #334155;">
                Dear <strong>${safeName}</strong>,
              </p>
              <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: #334155;">
                Thank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at <strong style="color: #042c5c; text-decoration: underline;">${safePhone}</strong>.
              </p>

              <!-- Equipment Specs Summary -->
              <div style="background-color: #f8fafc; border-left: 4px solid #042c5c; border-radius: 4px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b;">
                  Your Submitted Details &amp; Specifications
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="4" style="font-size: 13px;">
                  <tr>
                    <td width="35%" style="color: #64748b; font-weight: 600;">Reference ID:</td>
                    <td style="color: #042c5c; font-weight: 800; font-family: monospace;">${safeRefId}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">Customer Name:</td>
                    <td style="color: #0f172a; font-weight: 700;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">Company / Org:</td>
                    <td style="color: #0f172a; font-weight: 700;">${safeCompany}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">Phone Number:</td>
                    <td style="color: #0f172a; font-weight: 700;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">Email Address:</td>
                    <td style="color: #0f172a; font-weight: 700;">${escapeHtml(email)}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-weight: 600;">Equipment / Product:</td>
                    <td style="color: #ea580c; font-weight: 800;">${safeProduct}</td>
                  </tr>
                  <tr>
                    <td valign="top" style="color: #64748b; font-weight: 600; padding-top: 6px;">Requirements:</td>
                    <td style="color: #334155; line-height: 1.5; padding-top: 6px;">${safeMessage}</td>
                  </tr>
                </table>
              </div>

              <!-- Urgent Requirement Callout -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin: 24px 0 16px 0; background-color: #fff7ed; border-radius: 8px; border: 1px solid #fed7aa;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: #9a3412;">
                      Urgent equipment requirement?
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #7c2d12; line-height: 1.5;">
                      Call us directly: <a href="tel:8080238541" style="color: #ea580c; font-weight: 700; text-decoration: none;">80802 38541</a><br>
                      Email: <a href="mailto:aryvonmhe@gmail.com" style="color: #ea580c; font-weight: 700; text-decoration: none;">aryvonmhe@gmail.com</a>
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; font-size: 13px; line-height: 1.6; color: #64748b;">
                Best regards,<br>
                <strong style="color: #042c5c;">Application Engineering Team</strong><br>
                ARYVON Material Handling Solutions
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 20px 24px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">
                ARYVON MATERIAL HANDLING SOLUTIONS
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.4;">
                Industrial VRC Goods Lifts &bull; Scissor Lifts &bull; EOT Overhead Cranes &bull; Industrial Conveyors
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generate Inquiry Notification email sent to the Owner / Admin
 */
function generateOwnerEmail({ fullName, companyName, phone, email, productName, message, referenceId, timestamp }) {
  const safeName = escapeHtml(fullName);
  const safeCompany = escapeHtml(companyName);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeProduct = escapeHtml(productName || 'General Equipment Inquiry');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  const safeRefId = escapeHtml(referenceId);
  const safeTime = escapeHtml(timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Equipment Inquiry - ${safeRefId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #042c5c; padding: 24px; border-bottom: 4px solid #f97316;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 11px; font-weight: 700; color: #fdba74; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 4px;">
                      Website Lead Notification
                    </span>
                    <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #ffffff;">
                      New Equipment Quotation Inquiry
                    </h1>
                  </td>
                  <td align="right" valign="middle">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 14px; font-weight: 800; color: #042c5c; background-color: #fdba74; padding: 6px 12px; border-radius: 6px; display: inline-block;">
                      ${safeRefId}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Client Details Table -->
          <tr>
            <td style="padding: 24px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">
                Customer & Specification Details
              </h2>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="10" style="border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td width="35%" style="font-weight: 600; color: #64748b;">Customer Name:</td>
                  <td style="font-weight: 700; color: #0f172a;">${safeName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                  <td style="font-weight: 600; color: #64748b;">Company / Org:</td>
                  <td style="font-weight: 600; color: #0f172a;">${safeCompany}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="font-weight: 600; color: #64748b;">Phone Number:</td>
                  <td>
                    <a href="tel:${safePhone}" style="color: #042c5c; font-weight: 700; text-decoration: none;">
                      ${safePhone}
                    </a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                  <td style="font-weight: 600; color: #64748b;">Email Address:</td>
                  <td>
                    <a href="mailto:${safeEmail}" style="color: #042c5c; font-weight: 700; text-decoration: none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="font-weight: 600; color: #64748b;">Equipment of Interest:</td>
                  <td style="font-weight: 800; color: #ea580c;">${safeProduct}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                  <td style="font-weight: 600; color: #64748b;">Submission Time:</td>
                  <td style="color: #334155;">${safeTime}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #64748b;">Reference ID:</td>
                  <td style="font-family: monospace; font-weight: 700; color: #042c5c;">${safeRefId}</td>
                </tr>
              </table>

              <!-- Requirements / Message -->
              <div style="margin-top: 24px;">
                <h3 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #042c5c;">
                  Operating Requirements & Specifications:
                </h3>
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; font-size: 14px; line-height: 1.6; color: #1e293b;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Quick Action Box -->
              <div style="margin-top: 24px; padding: 16px; background-color: #e0f2fe; border-radius: 8px; border: 1px solid #bae6fd; font-size: 13px; color: #0369a1;">
                <strong>Quick Reply:</strong> You can reply directly to this notification email &mdash; it will be delivered to <strong>${safeEmail}</strong>.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
              Direct website inquiry notification &bull; ARYVON Material Handling Solutions
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

module.exports = {
  generateClientEmail,
  generateOwnerEmail
};


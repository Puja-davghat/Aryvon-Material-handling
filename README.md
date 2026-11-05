# ARYVON &mdash; Material Handling Solutions

Production-ready static React website for **ARYVON**, engineered for showcasing material handling equipment, online product catalogue, sector applications, and customer quotation enquiries with automated email delivery.

---

## 1. Technology Architecture

- **Frontend (`client/`)**:
  - React 18, Vite 6, Tailwind CSS 3.4
  - React Router DOM 6 for client-side routing
  - Motion / Framer Motion for accessible animations
  - Lucide React for consistent industrial iconography
- **Email Delivery (Zero Backend Server, Zero Database)**:
  - Dispatched directly from the browser upon form submission
  - **Email 1 (Owner Notification)**: Sends complete enquiry details to `aryvonmhe@gmail.com`
  - **Email 2 (Client Confirmation)**: Sends immediate thank-you email with unique Reference ID (`#ARY-XXXXXX`) to the client's submitted email
  - Compatible with EmailJS / Web3Forms for 100% static hosting on cPanel `public_html`, Apache, Vercel, or Netlify
- **Node.js / PHP Optional Backends**:
  - `server/server.js`: Standalone Node.js Express server with Resend integration (if Node.js hosting is preferred)
  - `api/enquiry.php`: Standalone PHP endpoint with PHPMailer (if PHP hosting is preferred)

---

## 2. Directory Structure

```
AryvonUC/
├── client/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── logo/aryvon-logo.png
│   │   │   └── images/ (products, industries, hero, process)
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── EngineeringProcessSection.jsx
│   │   │   └── ...
│   │   ├── config/
│   │   │   └── emailConfig.js   <-- EmailJS / Client Email Settings
│   │   ├── data/
│   │   │   └── products.js      <-- Static Catalogue (Zero DB)
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js           <-- Pure client-side dual email dispatch
│   │   └── App.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                      <-- Optional Node.js backend
├── package.json
└── README.md
```

---

## 3. How the Automated Dual Email Works (Without Backend)

1. **Client Submits Form**:
   - The user inputs their Name, Company, Phone Number, Email Address, and Equipment Specifications.
   - All inputs are strictly validated directly in React before submission.
2. **Automated Reference ID**:
   - The frontend generates a unique tracking code: `#ARY-` + 6 random digits (e.g., `#ARY-849201`).
3. **Automated Dual Email Dispatch**:
   - **Email to Owner (`aryvonmhe@gmail.com`)**: Receives all client details, phone, email, equipment requirement, and tracking ID.
   - **Email to Client**: Receives a thank-you confirmation with their Reference ID, submitted details, and contact lines (`80802 38541` / `aryvonmhe@gmail.com`).
4. **On-Screen Confirmation**:
   - Displays immediate success alert with the generated Reference ID on the exact same page.
   - Never redirects the user, never opens `mailto:`, and never launches external email apps.

---

## 4. cPanel Static Deployment Instructions

1. **Build the Production Frontend**:
   ```bash
   cd client
   npm run build
   ```
2. **Upload to cPanel**:
   - Open cPanel -> **File Manager**.
   - Navigate to `public_html/`.
   - Upload all contents from `client/dist/` into `public_html/`.
3. **SPA Routing (.htaccess)**:
   Ensure your `public_html/.htaccess` file contains standard React SPA routing rules:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
4. **Done!** Your website is live with zero server maintenance.

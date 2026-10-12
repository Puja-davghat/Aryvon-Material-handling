# ARYVON &mdash; Material Handling Solutions

Production-ready full-stack website for **ARYVON**, engineered for showcasing material handling equipment, online product catalogue, sector applications, and customer quotation enquiries.

---

## 1. Technology Architecture

- **Frontend (`client/`)**:
  - React 18, Vite 6, Tailwind CSS 3.4
  - React Router DOM 6 for client-side routing
  - Motion / Framer Motion for accessible animations
  - Lucide React for consistent industrial iconography
- **Backend (`server/`)**:
  - Node.js & Express.js REST API
  - MySQL2 with parameterized queries & transaction support
  - Helmet for HTTP security headers & Express Rate Limiting for spam protection
  - Centralized error handling & server-side payload validation
- **Database (`database/schema.sql`)**:
  - MySQL database (`aryvon_db`)
  - Tables: `product_categories`, `products`, `enquiries`, `enquiry_products`
  - Resilient automated in-memory dataset fallback during development
- **Email Service (`server/services/emailService.js`)**:
  - Nodemailer SMTP integration sending notifications to business email

---

## 2. Directory Structure

```
AryvonUC/
├── client/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── logo/aryvon-logo.png
│   │   │   └── images/ (products, industries, hero, about)
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductDetailModal.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── config/database.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/emailService.js
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── database/
│   └── schema.sql
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 3. Installation & Local Setup

### Prerequisites
- Node.js (v18.x or v20.x+)
- MySQL Server (v8.0+ or MariaDB 10.5+)

### Step 1: Install Dependencies
```bash
# In the project root, install both client and server packages:
npm run install:all

# Or separately:
cd server && npm install
cd ../client && npm install
```

### Step 2: Initialize MySQL Database
1. Log into your MySQL console or client:
```bash
mysql -u root -p
```
2. Execute the provided schema file:
```sql
SOURCE database/schema.sql;
```
*This creates the `aryvon_db` database, tables, and inserts initial verified equipment categories and sample products.*

### Step 3: Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Update with your local database and SMTP credentials:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MySQL Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=aryvon_db
DB_USER=root
DB_PASSWORD=your_password

# Outbound Email Notifications
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=notifications@yourdomain.com
EMAIL_PASSWORD=your_smtp_app_password
ENQUIRY_TO_EMAIL=aryvon_business@domain.com
```

### Step 4: Run the Application Locally
In two terminal tabs:
```bash
# Terminal 1: Run Express Server (Port 5000)
npm run dev:server

# Terminal 2: Run Vite React Frontend (Port 5173)
npm run dev:client
```
Access the application in your browser at `http://localhost:5173`.

---

## 4. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service status & database connectivity check |
| `GET` | `/api/categories` | Retrieve list of equipment categories |
| `GET` | `/api/products` | Retrieve active products (supports `?category=ID` and `?search=query`) |
| `GET` | `/api/products/:id` | Retrieve single product details & technical specifications |
| `POST` | `/api/enquiries` | Validate and store quotation enquiry; trigger email notification |

---

## 5. Deployment Guide

### Frontend Deployment (e.g. Vercel)
1. Set the root directory or framework preset to `client` (Vite).
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Set environment variable: `VITE_API_BASE_URL` to your production backend URL (e.g., `https://api.yourdomain.com`).

### Backend Deployment (Node.js Host)
1. Deploy `server/` to any Node.js host (Render, Railway, DigitalOcean App Platform, AWS Elastic Beanstalk).
2. Set Production Environment Variables from `.env.example`.
3. Start Command: `npm start`

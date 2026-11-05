<?php
/**
 * ARYVON - Material Handling Solutions
 * SMTP & Mail Configuration File for cPanel
 *
 * Update these settings with your cPanel email or Gmail SMTP credentials.
 * ZERO database required.
 */

return [
    // ── SMTP Server Settings ──
    'smtp' => [
        // For Gmail SMTP: 'smtp.gmail.com', port 587, secure 'tls'
        // For cPanel Webmail: 'mail.yourdomain.com' or 'localhost', port 465 (ssl) or 587 (tls)
        'host'       => getenv('SMTP_HOST') ?: 'smtp.gmail.com',
        'port'       => (int)(getenv('SMTP_PORT') ?: 587),
        'auth'       => true,
        'username'   => getenv('SMTP_USER') ?: 'aryvonmhe@gmail.com',
        // Paste your 16-character Gmail App Password or cPanel email password below:
        'password'   => getenv('SMTP_PASS') ?: 'your-app-password-here',
        'secure'     => getenv('SMTP_SECURE') ?: 'tls',
        'timeout'    => 15,
        'debug'      => 0,
    ],

    // ── Email Routing & Identities ──
    'mail' => [
        'from_email' => 'aryvonmhe@gmail.com',
        'from_name'  => 'ARYVON Material Handling Solutions',
        
        // Owner receives full customer enquiry copy
        'admin_email'=> 'aryvonmhe@gmail.com',
        'admin_name' => 'ARYVON Application Engineering Team',
        
        // Company contact details
        'support_phone'     => '+91 80802 38541',
        'support_phone_tel' => 'tel:+918080238541',
        'whatsapp_phone'    => '+91 83293 58214',
        'support_email'     => 'aryvonmhe@gmail.com',
    ],

    // ── Security & CORS Settings ──
    'cors' => [
        'allowed_origins' => ['*'],
        'allowed_methods' => ['POST', 'OPTIONS'],
        'allowed_headers' => ['Content-Type', 'Authorization', 'X-Requested-With'],
    ]
];

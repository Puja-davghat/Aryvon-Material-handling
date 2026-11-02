<?php
/**
 * ARYVON - Material Handling Solutions
 * SMTP & Mail Configuration File
 *
 * Update these settings with your SMTP provider credentials (e.g. Gmail, cPanel, SendGrid, Zoho, Hostinger)
 * Note: No database is used or required.
 */

return [
    // ── SMTP Server Settings ──
    'smtp' => [
        'host'       => getenv('SMTP_HOST') ?: 'smtp.gmail.com',       // e.g. smtp.gmail.com
        'port'       => getenv('SMTP_PORT') ?: 587,                    // 587 for TLS, 465 for SSL
        'auth'       => true,                                          // Enable SMTP authentication
        'username'   => getenv('SMTP_USER') ?: 'aryvonmhe@gmail.com',       // SMTP username / email address
        'password'   => getenv('SMTP_PASS') ?: 'your-smtp-app-password',// SMTP App password
        'secure'     => 'tls',                                         // 'tls' or 'ssl'
        'timeout'    => 15,
        'debug'      => 0,                                             // 0 = off, 1 = client, 2 = client and server
    ],

    // ── Email Routing & Identities ──
    'mail' => [
        // Outgoing From address
        'from_email' => 'aryvonmhe@gmail.com',
        'from_name'  => 'ARYVON Material Handling',
        
        // Admin recipient for all full inquiry copies
        'admin_email'=> 'aryvonmhe@gmail.com',
        'admin_name' => 'ARYVON Application Engineering Team',
        
        // Optional CC or BCC
        'cc_email'   => '',
        'bcc_email'  => '',
        
        // Company contact for urgent support
        'support_phone'     => '80802 38541',
        'support_phone_tel' => 'tel:8080238541',
        'support_email'     => 'aryvonmhe@gmail.com',
    ],

    // ── Security & CORS Settings ──
    'cors' => [
        'allowed_origins' => ['*'],
        'allowed_methods' => ['POST', 'OPTIONS'],
        'allowed_headers' => ['Content-Type', 'Authorization', 'X-Requested-With'],
    ]
];

<?php
/**
 * ARYVON - Equipment Inquiry Submission Handler
 *
 * - Generates Reference ID: #ARY- + 6 random digits
 * - Stores NOTHING on server (zero database, zero disk storage)
 * - Uses PHPMailer with SMTP (settings loaded from config.php)
 * - Validates client email and sends confirmation email to client
 * - Emails complete inquiry specifications copy to admin (aryvonmhe@gmail.com)
 * - Returns JSON response with on-screen success message
 */

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    http_response_code(200);
    exit;
}

// Ensure response is JSON
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Only POST requests are accepted.'
    ]);
    exit;
}

// Load configuration
$configFile = __DIR__ . '/config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Configuration file missing.'
    ]);
    exit;
}
$config = require $configFile;

// Read JSON or POST input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Anti-spam honeypot check
if (!empty($data['website_hp'])) {
    echo json_encode([
        'success' => true,
        'referenceId' => '#ARY-' . str_pad((string)random_int(100000, 999999), 6, '0', STR_PAD_LEFT),
        'message' => 'Enquiry received successfully.'
    ]);
    exit;
}

// Sanitize & Extract fields
$fullName    = trim($data['fullName'] ?? $data['name'] ?? '');
$companyName = trim($data['companyName'] ?? $data['company'] ?? '');
$phone       = trim($data['phone'] ?? '');
$email       = trim($data['email'] ?? '');
$productName = trim($data['productName'] ?? $data['subject'] ?? 'General Equipment Inquiry');
$message     = trim($data['message'] ?? $data['requirements'] ?? '');

// Validation
$errors = [];
if (empty($fullName) || mb_strlen($fullName) < 2) {
    $errors['fullName'] = 'Full Name is required (min 2 characters).';
}
if (empty($companyName)) {
    $errors['companyName'] = 'Company / Organization Name is required.';
}
if (empty($phone) || !preg_match('/^[\d\s+\-().]{7,25}$/', $phone)) {
    $errors['phone'] = 'A valid contact phone number is required.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'A valid email address is required so we can send your confirmation & proposal.';
}
if (empty($message) || mb_strlen($message) < 5) {
    $errors['message'] = 'Please specify your equipment requirements or questions.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields.',
        'errors'  => $errors
    ]);
    exit;
}

// 1. Generate Reference ID: #ARY- + 6 random digits
$randomDigits = str_pad((string)random_int(100000, 999999), 6, '0', STR_PAD_LEFT);
$referenceId  = '#ARY-' . $randomDigits;

$supportPhone = $config['mail']['support_phone'] ?? '80802 38541';
$supportTel   = $config['mail']['support_phone_tel'] ?? 'tel:8080238541';
$adminEmail   = $config['mail']['admin_email'] ?? 'aryvonmhe@gmail.com';

// 2. Prepare on-screen success message
$formattedSuccessMessage = sprintf(
    'Enquiry Successfully Received! Reference ID: %s. Thank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. A confirmation email has been sent to %s. An engineer will contact you promptly at %s. Urgent equipment requirement? Call us directly: %s (%s) or email %s.',
    $referenceId,
    $email,
    $phone,
    $supportPhone,
    $supportTel,
    $adminEmail
);

// 3. Send Emails via PHPMailer
require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mailErrors = [];

function createMailer($config) {
    $mail = new PHPMailer(true);
    $smtp = $config['smtp'];

    $mail->isSMTP();
    $mail->Host       = $smtp['host'];
    $mail->SMTPAuth   = $smtp['auth'];
    $mail->Username   = $smtp['username'];
    $mail->Password   = $smtp['password'];
    $mail->Port       = $smtp['port'];
    $mail->Timeout    = $smtp['timeout'];
    $mail->SMTPDebug  = $smtp['debug'];

    if ($smtp['secure'] === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['mail']['from_email'], $config['mail']['from_name']);
    return $mail;
}

$safeFullName    = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
$safeCompanyName = htmlspecialchars($companyName, ENT_QUOTES, 'UTF-8');
$safePhone       = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeEmail       = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeProduct     = htmlspecialchars($productName, ENT_QUOTES, 'UTF-8');
$safeMessage     = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$timestamp       = date('d M Y, h:i A T');

// A. Send Confirmation Email to Client
try {
    $clientMail = createMailer($config);
    $clientMail->addAddress($email, $fullName);
    $clientMail->isHTML(true);
    $clientMail->Subject = "Enquiry Received - Reference ID: {$referenceId} | ARYVON";

    $clientMail->Body = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;'>
        <div style='background: #042c5c; color: #ffffff; padding: 24px; border-bottom: 4px solid #f97316;'>
            <h2 style='margin: 0; font-size: 20px;'>Enquiry Successfully Received!</h2>
            <p style='margin: 6px 0 0 0; color: #fdba74; font-size: 14px;'>Reference ID: <strong>{$referenceId}</strong></p>
        </div>
        <div style='padding: 24px; color: #1e293b; line-height: 1.6;'>
            <p style='font-size: 15px;'>Dear <strong>{$safeFullName}</strong>,</p>
            <p style='font-size: 14px;'>Thank you for contacting <strong>ARYVON Material Handling Solutions</strong> regarding <strong>{$safeProduct}</strong>.</p>
            <p style='font-size: 14px;'>Your specifications have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at <strong>{$safePhone}</strong>.</p>
            
            <div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin: 16px 0; font-size: 13px;'>
                <strong>Your Submitted Requirements:</strong><br>
                {$safeMessage}
            </div>

            <div style='margin: 20px 0; background: #fff7ed; border-left: 4px solid #f97316; padding: 14px;'>
                <p style='margin: 0; font-size: 13px; color: #9a3412;'>
                    <strong>Urgent equipment requirement?</strong><br>
                    Call us directly: <a href='tel:{$supportTel}' style='color: #ea580c; font-weight: bold;'>{$supportPhone}</a><br>
                    Email: <a href='mailto:{$adminEmail}' style='color: #ea580c; font-weight: bold;'>{$adminEmail}</a>
                </p>
            </div>

            <div style='margin-top: 20px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 16px;'>
                <p style='margin: 0;'><strong>ARYVON Material Handling Solutions</strong></p>
                <p style='margin: 2px 0 0 0;'>Industrial VRC Goods Lifts &bull; Scissor Lifts &bull; EOT Cranes &bull; Industrial Conveyors</p>
            </div>
        </div>
    </div>";

    $clientMail->AltBody = "Dear {$fullName},\n\nEnquiry Successfully Received!\nReference ID: {$referenceId}\n\nThank you for your enquiry. Your specifications have been recorded and forwarded to our application engineering team. An engineer will contact you promptly at {$phone}.\n\nUrgent equipment requirement? Call us directly: {$supportPhone} ({$supportTel}) or email {$adminEmail}.\n\nARYVON Material Handling Solutions";

    $clientMail->send();
} catch (Exception $e) {
    $mailErrors['client'] = $e->getMessage();
}

// B. Send Full Copy to Admin (aryvonmhe@gmail.com)
try {
    $adminMail = createMailer($config);
    $adminMail->addAddress($adminEmail, 'ARYVON Admin');
    $adminMail->addReplyTo($email, $fullName);

    $adminMail->isHTML(true);
    $adminMail->Subject = "New Equipment Inquiry [{$referenceId}]: {$companyName} - {$productName}";

    $adminMail->Body = "
    <div style='font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;'>
        <div style='background: #042c5c; color: #ffffff; padding: 20px 24px; border-bottom: 4px solid #f97316;'>
            <h2 style='margin: 0; font-size: 20px;'>New Material Handling Equipment Inquiry</h2>
            <p style='margin: 5px 0 0 0; color: #fdba74; font-size: 13px;'>Reference ID: <strong>{$referenceId}</strong></p>
        </div>
        <div style='padding: 24px; background: #ffffff; color: #1e293b;'>
            <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
                <tr style='border-bottom: 1px solid #f1f5f9;'>
                    <td style='padding: 10px 0; font-weight: bold; width: 180px; color: #475569;'>Customer Name:</td>
                    <td style='padding: 10px 0; color: #0f172a;'>{$safeFullName}</td>
                </tr>
                <tr style='border-bottom: 1px solid #f1f5f9;'>
                    <td style='padding: 10px 0; font-weight: bold; color: #475569;'>Company / Organization:</td>
                    <td style='padding: 10px 0; color: #0f172a;'>{$safeCompanyName}</td>
                </tr>
                <tr style='border-bottom: 1px solid #f1f5f9;'>
                    <td style='padding: 10px 0; font-weight: bold; color: #475569;'>Phone Number:</td>
                    <td style='padding: 10px 0; color: #0f172a;'><a href='tel:{$safePhone}' style='color: #042c5c; font-weight: bold;'>{$safePhone}</a></td>
                </tr>
                <tr style='border-bottom: 1px solid #f1f5f9;'>
                    <td style='padding: 10px 0; font-weight: bold; color: #475569;'>Email Address:</td>
                    <td style='padding: 10px 0; color: #0f172a;'><a href='mailto:{$safeEmail}' style='color: #042c5c; font-weight: bold;'>{$safeEmail}</a></td>
                </tr>
                <tr style='border-bottom: 1px solid #f1f5f9;'>
                    <td style='padding: 10px 0; font-weight: bold; color: #475569;'>Product / Equipment:</td>
                    <td style='padding: 10px 0; color: #f97316; font-weight: bold;'>{$safeProduct}</td>
                </tr>
                <tr style='border-bottom: 1px solid #f1f5f9;'>
                    <td style='padding: 10px 0; font-weight: bold; color: #475569;'>Submission Time:</td>
                    <td style='padding: 10px 0; color: #64748b;'>{$timestamp}</td>
                </tr>
            </table>

            <div style='margin-top: 20px;'>
                <h4 style='margin: 0 0 8px 0; color: #042c5c; font-size: 14px; text-transform: uppercase;'>Specifications & Requirements:</h4>
                <div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155;'>
                    {$safeMessage}
                </div>
            </div>
        </div>
        <div style='background: #f1f5f9; padding: 14px 24px; font-size: 12px; color: #64748b; text-align: center;'>
            ARYVON Material Handling Solutions &bull; Direct Website Inquiry Notification
        </div>
    </div>";

    $adminMail->AltBody = "New Inquiry [{$referenceId}]\nName: {$fullName}\nCompany: {$companyName}\nPhone: {$phone}\nEmail: {$email}\nProduct: {$productName}\n\nRequirements:\n{$message}";

    $adminMail->send();
} catch (Exception $e) {
    $mailErrors['admin'] = $e->getMessage();
}

// 4. Return Output JSON
echo json_encode([
    'success'       => true,
    'referenceId'   => $referenceId,
    'customerPhone' => $phone,
    'customerEmail' => $email,
    'fullMessage'   => $formattedSuccessMessage,
    'message'       => $formattedSuccessMessage,
    'mailStatus'    => empty($mailErrors) ? 'sent' : 'notice',
    'mailNotice'    => !empty($mailErrors) ? $mailErrors : null
]);

<?php
/**
 * Contact Form Handler - PHP Mailer
 * 
 * Αυτό το script λαμβάνει τα δεδομένα της φόρμας επικοινωνίας
 * και στέλνει email στο info@aggeio.eu
 * 
 * IMPORTANT: Βάλε αυτό το αρχείο στο root του server σου
 * και ρύθμισε το CONTACT_ENDPOINT στο Booking.tsx
 */

// CORS headers για να δουλεύει από οποιοδήποτε domain
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required = ['name', 'email', 'phone', 'service', 'clinic'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit();
    }
}

// Sanitize input
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags(trim($data['phone'])));
$service = htmlspecialchars(strip_tags(trim($data['service'])));
$clinic = htmlspecialchars(strip_tags(trim($data['clinic'])));
$message = isset($data['message']) ? htmlspecialchars(strip_tags(trim($data['message']))) : '';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Service labels
$serviceLabels = [
    'triplex' => 'Triplex Αγγείων',
    'laser' => 'Laser Κιρσοί',
    'arterial' => 'Αρτηριακές Παθήσεις',
    'consultation' => 'Γενική Εξέταση'
];

// Clinic labels
$clinicLabels = [
    'chalandri' => 'Χαλάνδρι',
    'piraeus' => 'Πειραιάς'
];

$serviceLabel = $serviceLabels[$service] ?? $service;
$clinicLabel = $clinicLabels[$clinic] ?? $clinic;

// Email configuration
$to = 'info@aggeio.eu';
$subject = "=?UTF-8?B?" . base64_encode("Νέο Ραντεβού - $name") . "?=";

// Build email body
$emailBody = "
<!DOCTYPE html>
<html lang='el'>
<head>
    <meta charset='UTF-8'>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; padding: 20px;'>
        <h2 style='color: #1a5f7a; border-bottom: 2px solid #1a5f7a; padding-bottom: 10px;'>
            Νέο Αίτημα Ραντεβού
        </h2>
        
        <table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>
            <tr>
                <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;'>Ονοματεπώνυμο:</td>
                <td style='padding: 10px; border-bottom: 1px solid #eee;'>$name</td>
            </tr>
            <tr>
                <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;'>Email:</td>
                <td style='padding: 10px; border-bottom: 1px solid #eee;'><a href='mailto:$email'>$email</a></td>
            </tr>
            <tr>
                <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;'>Τηλέφωνο:</td>
                <td style='padding: 10px; border-bottom: 1px solid #eee;'><a href='tel:$phone'>$phone</a></td>
            </tr>
            <tr>
                <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;'>Υπηρεσία:</td>
                <td style='padding: 10px; border-bottom: 1px solid #eee;'>$serviceLabel</td>
            </tr>
            <tr>
                <td style='padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;'>Ιατρείο:</td>
                <td style='padding: 10px; border-bottom: 1px solid #eee;'>$clinicLabel</td>
            </tr>
        </table>
";

if (!empty($message)) {
    $emailBody .= "
        <div style='margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;'>
            <strong>Μήνυμα:</strong>
            <p style='margin-top: 10px;'>$message</p>
        </div>
    ";
}

$emailBody .= "
        <p style='margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;'>
            Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του aggeio.eu
        </p>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Aggeio.eu <noreply@aggeio.eu>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$success = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}

<?php
// Controleer of het een POST request is
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Alleen POST requests toegestaan"]);
    exit;
}

// Haal de JSON data op
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Valideer de data
if (!isset($data['organisatie']) || !isset($data['naam']) || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Ontbrekende verplichte velden"]);
    exit;
}

// Haal de gegevens op
$organisatie = htmlspecialchars(trim($data['organisatie']));
$naam = htmlspecialchars(trim($data['naam']));
$email = htmlspecialchars(trim($data['email']));
$telefoon = isset($data['telefoon']) ? htmlspecialchars(trim($data['telefoon'])) : 'Niet opgegeven';

// Valideer email adres
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Ongeldig e-mailadres"]);
    exit;
}

// Email instellingen
$to = "info@infomaatje.org";
$subject = "Nieuwe Demo Aanvraag van " . $naam;

// Email body (HTML)
$message = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4F81BD 0%, #3A6BA5 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; }
        .field { margin-bottom: 15px; padding: 12px; background: white; border-left: 4px solid #4F81BD; }
        .field-label { font-weight: bold; color: #1f497d; margin-bottom: 5px; }
        .field-value { color: #333; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>📅 Nieuwe Demo Aanvraag</h2>
            <p>Er is een nieuwe demo aanvraag binnengekomen via de website</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='field-label'>🏢 Organisatie:</div>
                <div class='field-value'>" . $organisatie . "</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>👤 Naam contactpersoon:</div>
                <div class='field-value'>" . $naam . "</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>📧 E-mailadres:</div>
                <div class='field-value'><a href='mailto:" . $email . "'>" . $email . "</a></div>
            </div>
            
            <div class='field'>
                <div class='field-label'>📞 Telefoonnummer:</div>
                <div class='field-value'>" . $telefoon . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>Deze email is automatisch verzonden via het demo aanvraag formulier op infomaatje.nl</p>
            <p>Aangevraagd op: " . date('d-m-Y H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Demo Aanvraag <noreply@infomaatje.org>" . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Verstuur de email
if (mail($to, $subject, $message, $headers)) {
    // Optioneel: Verstuur ook een bevestigingsmail naar de aanvrager
    $confirm_subject = "Bevestiging Demo Aanvraag - Infomaatje";
    $confirm_message = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4F81BD 0%, #3A6BA5 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; }
            .success { background: #d8f3dc; padding: 15px; border-left: 4px solid #52b788; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>✅ Bedankt voor je demo aanvraag!</h2>
            </div>
            <div class='content'>
                <p>Beste " . $naam . ",</p>
                
                <div class='success'>
                    <strong>We hebben je aanvraag ontvangen!</strong>
                </div>
                
                <p>Bedankt voor je interesse in Infomaatje. We nemen binnen <strong>24 uur</strong> contact met je op om een geschikt moment in te plannen voor de demo.</p>
                
                <p><strong>Jouw gegevens:</strong></p>
                <ul>
                    <li>Organisatie: " . $organisatie . "</li>
                    <li>E-mail: " . $email . "</li>
                    <li>Telefoon: " . $telefoon . "</li>
                </ul>
                
                <p>Heb je in de tussentijd nog vragen? Je kunt ons bereiken via:</p>
                <p>
                    📧 <a href='mailto:info@infomaatje.org'>info@infomaatje.org</a><br>
                    📞 +(31) 6 24658206
                </p>
                
                <p>Met vriendelijke groet,<br>
                <strong>Team Infomaatje</strong></p>
            </div>
            <div class='footer'>
                <p>&copy; " . date('Y') . " Infomaatje. Alle rechten voorbehouden.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $confirm_headers = "MIME-Version: 1.0" . "\r\n";
    $confirm_headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $confirm_headers .= "From: Infomaatje <info@infomaatje.org>" . "\r\n";
    
    // Verstuur bevestigingsmail (fout hier blokkeert de hoofdmail niet)
    @mail($email, $confirm_subject, $confirm_message, $confirm_headers);
    
    // Succesvol
    http_response_code(200);
    echo json_encode([
        "success" => true, 
        "message" => "Demo aanvraag succesvol verzonden"
    ]);
} else {
    // Fout bij verzenden
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw."
    ]);
}
?>
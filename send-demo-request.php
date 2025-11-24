<?php
// CORS headers toestaan voor development
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handel OPTIONS request af (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

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

try {
    // Configureer a6Mailer met SMTP
    $aSMTP = [
        'helo' => 'anan6.com',
        'user' => BPMS_EMAIL_USER,
        'pass' => BPMS_EMAIL_PASS
    ];
    a6Mailer::setSMTP($aSMTP);
    
    // Configureer Google OAuth2 Provider
    $aParams = [
        'configName' => 'SMTPKEY',
        'clientId' => BPMS_EMAIL_CLIENT_ID,
        'clientSecret' => BPMS_EMAIL_CLIENT_SECRET,
        'email' => BPMS_EMAIL
    ];
    $oProvider = new a6GoogleProvider($aParams);
    a6Mailer::setProvider($oProvider);
    
    // ===== EMAIL 1: Naar info@infomaatje.org =====
    $oMail = new a6Mailer();
    
    // Van adres
    $sFromEmail = 'infomaatje@anan6.com';
    $oMail->setFrom($sFromEmail);
    
    // Onderwerp
    $oMail->setSubject('Nieuwe Demo Aanvraag van ' . $naam);
    
    // HTML body voor interne email
    $sHTMLContent = '
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
        <div class="container">
            <div class="header">
                <h2>📅 Nieuwe Demo Aanvraag</h2>
                <p>Er is een nieuwe demo aanvraag binnengekomen via de website</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">🏢 Organisatie:</div>
                    <div class="field-value">' . $organisatie . '</div>
                </div>
                
                <div class="field">
                    <div class="field-label">👤 Naam contactpersoon:</div>
                    <div class="field-value">' . $naam . '</div>
                </div>
                
                <div class="field">
                    <div class="field-label">📧 E-mailadres:</div>
                    <div class="field-value"><a href="mailto:' . $email . '">' . $email . '</a></div>
                </div>
                
                <div class="field">
                    <div class="field-label">📞 Telefoonnummer:</div>
                    <div class="field-value">' . $telefoon . '</div>
                </div>
            </div>
            <div class="footer">
                <p>Deze email is automatisch verzonden via het demo aanvraag formulier op infomaatje.nl</p>
                <p>Aangevraagd op: ' . date('d-m-Y H:i:s') . '</p>
            </div>
        </div>
    </body>
    </html>
    ';
    
    // Plain text versie
    $sTextContent = "Nieuwe Demo Aanvraag\n\n";
    $sTextContent .= "Organisatie: " . $organisatie . "\n";
    $sTextContent .= "Naam: " . $naam . "\n";
    $sTextContent .= "Email: " . $email . "\n";
    $sTextContent .= "Telefoon: " . $telefoon . "\n";
    $sTextContent .= "\nAangevraagd op: " . date('d-m-Y H:i:s');
    
    $oMail->setHTML($sHTMLContent);
    $oMail->setText($sTextContent);
    
    // Ontvangers
    $oMail->addAddress('info@infomaatje.org');
    
    // Reply-To naar aanvrager
    $oMail->addReplyTo($email, $naam);
    
    // Verstuur email 1
    $oMail->send();
    
    // ===== EMAIL 2: Bevestiging naar aanvrager =====
    $oMailConfirm = new a6Mailer();
    $oMailConfirm->setFrom($sFromEmail);
    $oMailConfirm->setSubject('Bevestiging Demo Aanvraag - Infomaatje');
    
    // HTML voor bevestigingsmail
    $sConfirmHTML = '
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
            ul { line-height: 1.8; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>✅ Bedankt voor je demo aanvraag!</h2>
            </div>
            <div class="content">
                <p>Beste ' . $naam . ',</p>
                
                <div class="success">
                    <strong>We hebben je aanvraag ontvangen!</strong>
                </div>
                
                <p>Bedankt voor je interesse in Infomaatje. We nemen binnen <strong>24 uur</strong> contact met je op om een geschikt moment in te plannen voor de demo.</p>
                
                <p><strong>Jouw gegevens:</strong></p>
                <ul>
                    <li>Organisatie: ' . $organisatie . '</li>
                    <li>E-mail: ' . $email . '</li>
                    <li>Telefoon: ' . $telefoon . '</li>
                </ul>
                
                <p>Heb je in de tussentijd nog vragen? Je kunt ons bereiken via:</p>
                <p>
                    📧 <a href="mailto:info@infomaatje.org">info@infomaatje.org</a><br>
                    📞 +(31) 6 24658206
                </p>
                
                <p>Met vriendelijke groet,<br>
                <strong>Team Infomaatje</strong></p>
            </div>
            <div class="footer">
                <p>&copy; ' . date('Y') . ' Infomaatje. Alle rechten voorbehouden.</p>
            </div>
        </div>
    </body>
    </html>
    ';
    
    // Plain text voor bevestiging
    $sConfirmText = "Beste " . $naam . ",\n\n";
    $sConfirmText .= "We hebben je demo aanvraag ontvangen!\n\n";
    $sConfirmText .= "Bedankt voor je interesse in Infomaatje. We nemen binnen 24 uur contact met je op.\n\n";
    $sConfirmText .= "Jouw gegevens:\n";
    $sConfirmText .= "- Organisatie: " . $organisatie . "\n";
    $sConfirmText .= "- E-mail: " . $email . "\n";
    $sConfirmText .= "- Telefoon: " . $telefoon . "\n\n";
    $sConfirmText .= "Met vriendelijke groet,\nTeam Infomaatje";
    
    $oMailConfirm->setHTML($sConfirmHTML);
    $oMailConfirm->setText($sConfirmText);
    $oMailConfirm->addAddress($email);
    
    // Verstuur bevestigingsmail (fout hier blokkeert de hoofdmail niet)
    try {
        $oMailConfirm->send();
    } catch (Exception $e) {
        // Log error maar blokkeer niet de response
        error_log('Bevestigingsmail error: ' . $e->getMessage());
    }
    
    // Succesvol
    http_response_code(200);
    echo json_encode([
        "success" => true, 
        "message" => "Demo aanvraag succesvol verzonden"
    ]);
    
} catch (phpmailerException $e) {
    // PHPMailer specifieke fout
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Email fout: " . $e->errorMessage()
    ]);
    
} catch (Exception $e) {
    // Algemene fout
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Er is een fout opgetreden: " . $e->getMessage()
    ]);
}
?>
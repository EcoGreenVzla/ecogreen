<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Cargador de variables de entorno (.env)
function loadEnv($path) {
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0 || empty(trim($line))) continue;
        list($name, $value) = explode('=', $line, 2);
        putenv(trim($name) . "=" . trim($value));
    }
}

// Carga el .env (ubicado un nivel arriba de public/)
loadEnv(__DIR__ . '/../.env');

// Rutas a la librería PHPMailer
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        echo json_encode(["status" => "error", "message" => "No data"]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // --- CONFIGURACIÓN SMTP ---
        $mail->isSMTP();
        $mail->Host       = getenv('SMTP_HOST');
        $mail->SMTPAuth   = true;
        $mail->Username   = getenv('SMTP_USER');
        $mail->Password   = getenv('SMTP_PASS');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = getenv('SMTP_PORT');

        // --- REMITENTE Y DESTINATARIO ---
        $mail->setFrom(getenv('SMTP_FROM_EMAIL'), getenv('SMTP_FROM_NAME'));
        $mail->addAddress(getenv('SMTP_FROM_EMAIL')); 
        $mail->addReplyTo($data['email'], $data['nombre']);

        // --- CONTENIDO DEL CORREO ---
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = '=?UTF-8?B?'.base64_encode("EcoGreen: " . $data['asunto']).'?=';
        
        $mail->Body = "
        <div style='font-family: Arial, sans-serif; border: 1px solid #0E306F; padding: 25px; color: #333;'>
            <h2 style='color: #0E306F; border-bottom: 2px solid #4BA406; padding-bottom: 10px;'>Nueva solicitud de contacto</h2>
            <p><strong>Nombre:</strong> {$data['nombre']}</p>
            <p><strong>Email:</strong> <a href='mailto:{$data['email']}'>{$data['email']}</a></p>
            <p><strong>Teléfono:</strong> {$data['telefono']}</p>
            <p><strong>Asunto:</strong> {$data['asunto']}</p>
            <div style='background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;'>
                <p><strong>Mensaje:</strong></p>
                <p>" . nl2br(strip_tags($data['mensaje'])) . "</p>
            </div>
            <p style='font-size: 11px; color: #999; margin-top: 30px;'>Enviado desde el formulario oficial de tumuro.com</p>
        </div>";

        $mail->AltBody = "Nombre: {$data['nombre']}\nEmail: {$data['email']}\nTeléfono: {$data['telefono']}\nMensaje: {$data['mensaje']}";

        $mail->send();
        echo json_encode(["status" => "success"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error SMTP: {$mail->ErrorInfo}"]);
    }
}
?>
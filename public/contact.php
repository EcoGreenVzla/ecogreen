<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $nombre   = strip_tags($data['nombre']);
    $email    = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags($data['telefono']);
    $asunto   = strip_tags($data['asunto']);
    $mensaje  = nl2br(strip_tags($data['mensaje'])); // Mantener saltos de línea

    $para      = "info@tumuro.com";
    $titulo    = "=?UTF-8?B?".base64_encode("EcoGreen: " . $asunto)."?="; // Codificar asunto para evitar spam
    
    // Cuerpo en formato HTML elegante
    $cuerpo = "
    <html>
    <head><title>$asunto</title></head>
    <body style='font-family: Arial, sans-serif; color: #333;'>
        <h2 style='color: #0E306F;'>Nueva solicitud de contacto</h2>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Teléfono:</strong> $telefono</p>
        <p><strong>Mensaje:</strong><br>$mensaje</p>
        <hr>
        <p style='font-size: 10px; color: #999;'>Enviado desde el formulario web de EcoGreen</p>
    </body>
    </html>";

    // CABECERAS PROFESIONALES
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; // Enviar como HTML
    $headers .= "From: EcoGreen Web <info@tumuro.com>" . "\r\n"; // El remitente DEBE ser de tu dominio
    $headers .= "Reply-To: $email" . "\r\n"; // Al darle a responder, le escribes al cliente
    $headers .= "Return-Path: info@tumuro.com" . "\r\n";

    if (mail($para, $titulo, $cuerpo, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error"]);
    }
}
?>
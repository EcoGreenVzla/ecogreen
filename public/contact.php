<?php
// Configuración de cabeceras para permitir que React se comunique con este script
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capturar los datos del formulario
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $nombre   = strip_tags($data['nombre']);
    $email    = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags($data['telefono']);
    $asunto   = strip_tags($data['asunto']);
    $mensaje  = strip_tags($data['mensaje']);

    // --- CONFIGURACIÓN DEL EMAIL ---
    $para      = "info@tumuro.com";
    $titulo    = "Nueva Solicitud: " . $asunto;
    
    // Cuerpo del mensaje
    $cuerpo = "Has recibido un nuevo mensaje de contacto:\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Asunto: $asunto\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    // Cabeceras (Hostinger requiere que el 'From' sea una cuenta real de tu dominio)
    $headers = "From: info@tumuro.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar correo usando el motor interno de Hostinger
    if (mail($para, $titulo, $cuerpo, $headers)) {
        echo json_encode(["status" => "success", "message" => "Mensaje enviado correctamente"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error al enviar el correo"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
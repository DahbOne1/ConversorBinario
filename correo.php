<?php
// Recibir datos del formulario

echo "sdj";
$correo = $_POST['correo'];
$sugerencias = $_POST['sugerencias'];

// Destinatario y asunto del correo
$destinatario = "david.arcos1000@gmail.com";
$asunto = "Nuevo mensaje de contacto desde el formulario del converson binario";

// Construir el cuerpo del correo
$cuerpo = "Correo: $correo\n";
$cuerpo .= "Sugerencias: $sugerencias\n";

// Enviar el correo
mail($destinatario, $asunto, $cuerpo);

// Redireccionar a una página de confirmación
header("Location: index.html");


?>

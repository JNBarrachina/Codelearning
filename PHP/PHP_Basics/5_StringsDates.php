<?php

//*STRINGS

$myString1 = "Hello World";
$myString2 = 'Learning PHP';


//Heredoc: Permite crear cadenas con saltos de linea
$myString3 = <<<EOT
    Hello World
    Learning PHP
EOT;
echo $myString3;

//*STRING FUNCTIONS
$paragraph = htmlentities('<p>This is a paragraph</p>');
echo $paragraph . "\n";
$paragraph = html_entity_decode($paragraph);
echo $paragraph . "\n";

$spacedString = "    a lot of spaces    ";
echo ltrim($spacedString) . "\n"; //Eliminar espacios a la izquierda
echo rtrim($spacedString) . "\n"; //Eliminar espacios a la derecha
echo trim($spacedString) . "\n"; //Eliminar espacios a la izquierda y derecha


echo strlen($myString1) . "\n"; //Obtener la longitud de una cadena
echo strtolower($myString1) . "\n"; //Convertir una cadena a minúsculas
echo strtoupper($myString1) . "\n"; //Convertir una cadena a mayúsculas
echo ucfirst(trim($spacedString)) . "\n"; //Convertir el primer carácter de una cadena a mayúscula
echo ucwords(trim($spacedString)) . "\n"; //Convertir cada palabra de una cadena a mayúsculas

echo substr($myString1, 0, 5); //Obtener una parte de una cadena
echo strpos($myString1, "World"); //Buscar la posición de una cadena en otra
echo strstr($myString1, "World"); //Buscar una cadena en otra
echo str_split($myString1); //Dividir una cadena en un array
print_r(explode(" ", $myString1)); //Dividir una cadena en un array
echo str_replace("Hello", "Hi", $myString1); //Reemplazar una cadena en otra

echo str_contains($myString1, "World"); //Comprobar si una cadena contiene otra
echo str_starts_with($myString1, "Hello"); //Comprobar si una cadena comienza con otra
echo str_ends_with($myString1, "World"); //Comprobar si una cadena termina con otra

echo str_pad("Hello", 20, "*"); //Agregar caracteres a una cadena
echo str_repeat("Hello", 3); //Repetir una cadena
echo str_shuffle($myString1); //Desordenar una cadena

//Encriptar cadenas
echo hash("sha256", $myString1); //Encriptar una cadena con un algoritmo de encriptación
echo crypt($myString1, "salt") . "\n"; //Encriptar una cadena con un salt


//*DATES

$myDate = date("Y-m-d H:i:s");
echo mktime(0, 0, 0, 1, 1, 2000) . "\n"; //Crear una fecha ()
echo time(); //Obtener la fecha actual en segundos
echo date("Y-m-d"); //Obtener la fecha actual
echo date("Y-m-d", strtotime("+1 day")); //Obtener la fecha de manana


$myDateTime = date_create("2000-01-01"); //Crear una fecha
echo date_format($myDateTime, "Y-m-d"); //Formato de fecha

?>
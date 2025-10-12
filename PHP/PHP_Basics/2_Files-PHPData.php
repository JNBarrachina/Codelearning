<?php
//Manejo de ficheros

//file_exists() //Comprobar si un fichero existe
$checkFile = file_exists("testtext.txt");
echo $checkFile;

//file_get_contents() //Obtener el contenido de un fichero

$testText = file_get_contents("testtext.txt");
echo $testText;

//file_put_contents() //Escribir en un fichero
file_put_contents("testtext.txt", "Saludos cordiales");

//Require //Incluir un fichero, pero si el fichero no existe lanza un error
require("testtext.txt");

//Include //Incluir un fichero, si el fichero no existe continua el script
include("testtext.txt");

//var_export() //Exportar variables
$arrayTest = [
    "test" => "test",
    "test2" => "test2",
    "test3" => "test3"
];

var_export($arrayTest);

//json_encode() //Convertir variables en JSON
$test = "test";
echo json_encode($arrayTest);
?>
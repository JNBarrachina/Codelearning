<?php

//*TIPOS DE DATOS

//*Tipos de datos PRIMITIVOS

$age = 20;  //int o integer
$pi = 3.1416; //float
$name = "John"; //string
$hasKids = true; //bool


//*Tipos de datos ESPECIALES

$number = null; //null
//$article?->title; //nullsafe
$resource = fopen("testtext.txt", "r"); //resource
echo $resource;

//*Tipado: asignar un tipo a una variable (asignación forzada o casting)
$myage = (int) 80;
$myfloat = (float) 3.1416;
$myname = (string) "John";
$mybool = (bool) true;

//*Conversión de tipos con funciones
$myage = intval(80);
$myfloat = floatval(3.1416);
$myname = strval("John");
$mybool = boolval(true);


//*Tipos de datos COMPUESTOS (ARRAY, OBJECT, ENUM)

//ARRAY NUMÉRICO
$myArray = [1, 2, 3, 4, 5];

echo $myArray[0]; //1

array_push($myArray, 6); //agregar un elemento al final
array_unshift($myArray, 0); //agregar un elemento al principio
array_pop($myArray); //eliminar un elemento al final
array_shift($myArray); //eliminar un elemento al principio
array_splice($myArray, 1, 2); //eliminar varios elementos
array_slice($myArray, 1, 2); //obtener varios elementos
unset($myArray[1]); //eliminar un elemento por su clave
//! Unset elimina clave-valor y deja un hueco en el array.

sort($myArray); //ordenar un array
rsort($myArray); //ordenar un array en orden inverso
shuffle($myArray); //mezclar un array

//ARRAY ASOCIATIVO
$myData = [
    "name" => "John",
    "age" => 20,
    "address" => "Calle 123",
];

echo $myData["name"]; //John
echo $myData["age"]; //20

$myData["email"] = "BwL0y@example.com";
$myData["phone"] = "123456789";

print_r($myData); //imprimir un array

$myNewData = [
    "hobbies" => [
        "basketball",
        "tennis",
    ],
    "birthday" => "01/01/2000",
];

$myFullData = array_merge($myData, $myNewData);

asort($myFullData); //ordenar un array asociativo
print_r($myFullData);

arsort($myFullData); //ordenar un array asociativo en orden inverso
print_r($myFullData);

array_keys($myFullData); //obtener las claves de un array asociativo
array_values($myFullData); //obtener los valores de un array asociativo
sizeof($myFullData); //obtener el tamaño de un array
count($myFullData); //obtener el número de elementos de un array

?>
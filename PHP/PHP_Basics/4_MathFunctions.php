<?php

//Funciones matemáticas avanzadas

$mynum = 9;
$myfloat = 3.1416;

echo pow($mynum, 2); //Elevar un número a la potencia
echo sqrt($mynum); //Raíz cuadrada
echo round($myfloat); //Redondear
echo ceil($myfloat); //Redondear hacia arriba
echo floor($myfloat); //Redondear hacia abajo
echo rand(1, 10); //Generar un número aleatorio
echo (is_numeric($myfloat)); //Comprobar si un número es numérico

?>
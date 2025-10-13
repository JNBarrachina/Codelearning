<?php

//*FUNCIONES

declare(strict_types=1); //Activar el modo estricto

function sum(int $a, int $b, int $c = 10): int|float
{
    return ($a + $b) * $c;
}

echo sum(1, 2) . "\n";
echo sum(1, 2, 3) . "\n";

//Paso por valor

function modifyText(string $text): string
{
    $text .= " (modificado)";  //! El valor de la variable original NO se modifica.
    return $text;
}

//Paso por referencia

function modifyTextandRef(string &$text): string
{
    $text .= " tras modificar la variable";  //? El valor de la variable original SI se modifica.
    return $text;
}

$text = "Saludos cordiales";
echo modifyText($text) . "\n";
echo $text . "\n";

echo modifyTextandRef($text) . "\n";
echo $text . "\n";


//*Funciones anónimas

$anonymousSum = function (int $a, int $b): int {
    return $a + $b;
};

echo $anonymousSum(1, 2) . "\n";


//*Closures

$sum = function (int $a, int $b): int {
    return $a + $b;
};

$sumClosure = function (int $a, int $b) use ($sum): int {
    return $sum($a, $b);
};

echo $sumClosure(10, 23) . "\n";

?>

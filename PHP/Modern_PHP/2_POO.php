<?php
declare(strict_types=1);

//*PROGRAMACIÓN ORIENTADA A OBJETOS

//*Clases y objetos

//Clases
class Coche {
    public function __construct(
        public string $marca,
        public string $modelo,
        public int $velocidad,
    ) {}

    public function acelerar(): int {
        return $this->velocidad++;
    }

    public function frenar(): int {
        return $this->velocidad--;
    }
}

//Objetos
$coche = new Coche("Audi", "A3", 0);
echo $coche->marca . "\n";
echo $coche->modelo . "\n";
echo $coche->velocidad . "\n";
echo $coche->acelerar() . "\n";
echo $coche->velocidad . "\n";
echo $coche->frenar() . "\n";
echo $coche->velocidad . "\n";
?>
<?php

//*ESTRUCTURAS DE CONTROL

//CONDICIONALES

$age = 20;

//if
if ($age >= 18) {
    echo "Eres mayor de edad";
}

//if-else
if ($age >= 18) {
    echo "Eres mayor de edad";
} else {
    echo "Eres menor de edad";
}

//if-else-if
if ($age >= 18) {
    echo "Eres mayor de edad";
} elseif ($age >= 16) {
    echo "Eres adolescente";
} else {
    echo "Eres menor de edad";
}

//switch
switch ($age) {
    case $age >= 18:
        echo "Eres mayor de edad";
        break;
    case 17:
    case 16:
        echo "Eres adolescente";
        break;
    default:
        echo "Eres menor de edad";
        break;
}



//REPETITIVAS

//while
$i = 0;
while ($i < 10) {
    echo $i;
    $i++;
}

//do-while
$i = 0;
do {
    echo $i;
    $i++;
} while ($i < 10);

//for
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

//foreach
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
    echo $color;
}


?>
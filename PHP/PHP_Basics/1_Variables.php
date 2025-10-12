<?php

//Comentario de una sola linea

/*
Comentario de varias lineas
*/

//Variables

/* PHP Standard Recommendations:
1. Use camelCase for variable and method names.
2. Use PascalCase for class and file names.
3. Use snake_case and UPPER_CASE for constant names.
*/

$name = "John";  //El nombre de una variable no debería superar los 16 caracteres

define("PI", 3.1416); //Definir una constante
if (defined("PI")) {
    echo "El valor de PI es 3.1416 y es una constante";
}

/* Variables locales y globales 

Las variables locales tienen alcance dentro de la función o bloque de código, mientras que las variables globales tienen alcance global y se pueden acceder desde cualquier parte del código.
*/

?>
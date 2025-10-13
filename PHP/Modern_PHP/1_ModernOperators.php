<?php

//* OPERADORES MODERNOS

//Operador ternario
$statusMessage = $statusCode == 200 ? 'Success' : 'Error';


//Operador de fusión null
$name = null;

$myName = isset($name) ? $name : 'Unknown'; //! Forma "antigua, más verbosa
$myName = $name ?? 'Unknown'; //? Más moderno y limpio


//Match expression (alternativa moderna y más segura a switch)
$statusCode = 200;

$finalStatus = match ($statusCode) {
    200 => 'Success',
    404 => 'Not Found',
    default => 'Error',
};


//Named arguments
function createUser($name, $email, $password) {
    return [
        'name' => $name,
        'email' => $email,
        'password' => $password,
    ];
}

$newUser = createUser(
    name: 'John Doe',
    email: 'tKl0W@example.com',
    password: '123456',
);

?>
<?php

//*EXCEPCIONES

//throw //Lanzar una excepción
try {
    throw new Exception("This is an exception");
} catch (Exception $e) {
    echo $e->getMessage();
}

//try catch finally
try {
    //Código que puede generar una excepción
} catch (Exception $e) {
    //Código que se ejecutará si se produce una excepción
} finally {
    //Código que se ejecutará siempre
}
?>
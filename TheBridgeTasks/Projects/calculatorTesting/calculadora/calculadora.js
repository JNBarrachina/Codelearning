

operacion = " "
resultado = 0

function calculadora(numero) {
    
    if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") {
        document.getElementById("pinferior").innerHTML += numero
        valor1 = document.getElementById("pinferior").innerHTML
    }

    else if (resultado != "") {
        resultado = 0
        document.getElementById("pinferior").innerHTML = " "
        document.getElementById("psuperior").innerHTML = " "
        document.getElementById("pinferior").innerHTML += numero
        valor1 = document.getElementById("pinferior").innerHTML
    }

    else {
        document.getElementById("pinferior").innerHTML += numero
        valor1 = document.getElementById("pinferior").innerHTML
    }
}

function suma(){

}

function resta(){
    
}

function multi(){
    
}

function divi(){
    
}

function operar(operador) {

    operacion = operador

    if (resultado != "" && (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/")) {
        valor2 = resultado
        cadena = resultado + operador
        document.getElementById("psuperior").innerHTML = cadena
        document.getElementById("pinferior").innerHTML = ""
    }

    else {
        valor2 = valor1
        cadena = valor2 + operador
        document.getElementById("psuperior").innerHTML += cadena
        document.getElementById("pinferior").innerHTML = ""
    }
}


function calcular() {

    switch (operacion) {
        case "+":
            document.getElementById("psuperior").innerHTML = valor2 + operacion + valor1
            resultado = (valor2 - 0) + (valor1 - 0)
            document.getElementById("pinferior").innerHTML = resultado
            valor1 = ""
            break
        case "-":
            document.getElementById("psuperior").innerHTML = valor2 + operacion + valor1
            resultado = valor2 - valor1
            document.getElementById("pinferior").innerHTML = resultado
            valor1 = ""
            break
        case "*":
            document.getElementById("psuperior").innerHTML = valor2 + operacion + valor1
            resultado = valor2 * valor1
            document.getElementById("pinferior").innerHTML = resultado
            valor1 = ""
            break
        case "/":
            document.getElementById("psuperior").innerHTML = valor2 + operacion + valor1
            resultado = valor2 / valor1
            document.getElementById("pinferior").innerHTML = resultado
            valor1 = ""
            break
    }

    operacion = ""
}

function borrar() {
    if (document.getElementById("pinferior").innerHTML != "") {
        
        if (valor1 % 1 == 0) { //Si es entero
            if (valor1 < 10) { //Si es de un digito
                document.getElementById("pinferior").innerHTML = " "
            }
    
            else if (valor1 >= 10) { //Si es de dos digitos o más
    
                while (valor1 % 10 != 0) {
                    valor1 = valor1 - 1
                }      
                
                valor1 = valor1 / 10
                document.getElementById("pinferior").innerHTML = valor1
            }
        }
        
        else if (valor1 % 1 != 0) { //Si es decimal
        
            valor1 = valor1.toString().split(".")

            if (valor1[1] < 10) { //Si la parte decimal es de un digito
                valor1 = valor1[0]
                document.getElementById("pinferior").innerHTML = valor1 + "."
            }

            else if (valor1[1] >= 10) { //Si la parte decimal es de dos digitos o mas

                while (valor1[1] % 10 != 0) {
                valor1[1] = valor1[1] - 1
                }

                valor1[1] = valor1[1] / 10

                valor1 = valor1[0] + "." + valor1[1]
                document.getElementById("pinferior").innerHTML = valor1

            }
        }
    }
}

function reset() { 
    document.getElementById("psuperior").innerHTML = " "
    document.getElementById("pinferior").innerHTML = " "
}
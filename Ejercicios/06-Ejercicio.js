'use strict'

/**
 * Ejercicio #6 
 * 
 * Hacer un programa que nos diga si un número es par o impar
 * y la ventana tiene que comprobar si el numero ingresado es valido, si no es valido debe pedir nuevamente el numero y validar si el numero es par o impar
 */


var numero = parseInt(prompt("Ingresa por favor un numero", 0));


while (isNaN(numero)) {

    numero = parseInt(prompt("Ingresa por favor un numero", 0));
    
}


if (numero % 2 == 0) {
    alert("Es un numero par");
}else{
    alert("Es un numero impar");
}
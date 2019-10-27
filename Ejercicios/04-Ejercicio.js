'use strict'

/*

Ejercicio 4 

Mostrar todos los números impares que existen enrte 2 números que ingrese el usuario

*/


var numero1 = parseInt(prompt("Ingresa por favor el primer numero", 0));

var numero2 = parseInt(prompt("Ingresa por favor el segundo numero", 0));


/* document.write("<h2>Del" + numero1 + "al numero " + numero2 + "Estan estos números: </h2>")
 */

while (numero1 < numero2){

numero1++;

if( numero1%2 != 0 ){

    console.log("El número "+numero1+" es impar");

}



}





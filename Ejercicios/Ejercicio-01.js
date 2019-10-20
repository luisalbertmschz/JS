'use strict'

/*
-Hacer un programa que pida 2 numeros
-que digal cual es amyor, cual es menor y si son iguales
-

*/


var numero1 = parseInt(prompt("Ingrese el primer numero",0));

var numero2 = parseInt(prompt("Ingrese el segundo numero",0));



if( numero1 > numero2){

    alert("El primer numero "+numero1+", es mayor que el segundo numero "+numero2);

}else if (numero1 < numero2){

    alert("El segundo numero " + numero2 + ", es mayor que el primer numero " + numero1);


    }

if (numero1 == numero2 ) {


 alert("Ambos numeros son iguales  ");

}else if(numero2 == numero1){

 alert("Ambos numeros son iguales");

}







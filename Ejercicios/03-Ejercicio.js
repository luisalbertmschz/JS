'use strict'

/*
-Hacer un programa que muestre todos los numeros que hay 
entre 2 numeros introducidos por el usuario.
*/

var numero1 = parseInt(prompt("Ingresa por favor el primer numero",0));

var numero2 = parseInt(prompt("Ingresa por favor el segundo numero",0));


document.write("<h2>Del"+numero1+"al numero "+numero2+"Estan estos números: </h2>")

for (var i = numero1; i <= numero2; i++) {
   
    document.write(i+"<br>");
   
}



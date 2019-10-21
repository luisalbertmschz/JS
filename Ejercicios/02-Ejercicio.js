'use strict'

/*
Utilizando un bluce, mostrar la media y  la suma los numeros introducidos por el usuario
hasta qu se ingrese un numero negativo
*/


var suma = 0;
var  contador = 0;

//Bucle Do-While

do{

var numero = parseInt(prompt("Introduce numeros mientras no sea un negativo ",0));

if(isNaN(numero )){
  numero = 0;

}else if( numero >= 0){
  suma = suma + numero;

  contador ++
}
console.log(suma);
console.log(contador);

}while(numero >=0)

alert("La suma de todos los numeros es "+suma);

alert("La media de todos los numeros es: "+(suma/contador));


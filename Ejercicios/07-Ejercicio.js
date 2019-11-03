'use strict'

/**
 * 
 * Ejercio #7
 * 
 * Realizar un programa que muestre la tabla de multiplicar de cualquier numero que introduzca el usuario
 */
 

 var numero = parseInt(prompt("Ingresa por favor un numero del cual quieres la tabla", 1));

 for ( var  i = 0; i <= 12 ; i++ ) {

     document.write ( i + "X" + numero + " = " + ( i * numero + " <br> " ) );

     

     
 }



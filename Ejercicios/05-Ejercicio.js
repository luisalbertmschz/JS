'use strict'


/*

---Ejercicio 5 ---

Mostrar todos los numeros divisores de un n[umero instroducido por el usuario

*/



/**
 Un numero es divisor de otro numero cuando al dividirlos entre sis da como resultado cero
 */
var numero = parseInt(prompt("Ingresa por favor un numero", 1));


for ( var i = 0; i <= numero; i++) {
    
    if ( numero % i == 0 ) {

        console.log ("Divisor: "+i)
        
    }
    
}
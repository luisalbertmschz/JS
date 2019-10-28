'use strict'


/*

---Ejercicio 5 ---

Mostrar todos los numeros divisores de un n[umero instroducido por el usuario

*/

var numero = parseInt(prompt("Ingresa por favor un numero", 1));


for ( var i = 0; i <= numero; i++) {
    
    if ( numero % i == 0 ) {

        console.log ("Divisor: "+i)
        
    }
    
}
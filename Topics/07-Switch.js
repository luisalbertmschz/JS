'use strict'

var edad = 18;

var imprime ="";


switch (edad){


case 18:
    imprime = "Acabas de cumplir la mayoria de edad";

    break;

case 25:
        imprime = "Ya eres un adulto";

    break;

case 40:
    imprime = "Cuidado con la crisis de los 40";

break;

case 70:
    imprime = "Llegar a esa edad es un lujo";

break;

default:
    imprime = "No hay mensajes a mostrar para tu edad ";



}

console.log(imprime);


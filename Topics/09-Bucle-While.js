'use strict'

//Bucle While

var year = 2000;

while(year <= 2019){
    //Ejecuta esto:
    console.log("Estamos en el año "+year);
    


    //Agregando un break

    if( year == 2000 ){

        break;
    }


    year++;


}


//Bucle Do While


var years = 20;


do{

    console.log("Solo cuando sea diferente de 20");
    year++;


}while(years > 25)
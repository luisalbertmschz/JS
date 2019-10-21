'use strict'

//CONDICIONAL IF
//Si A es igual a B entonces hz algo especificado

//IF significa Si
//Si pasa esto ejecuta esto


/*
var edad1 =1;
var edad2 = 12;
if ( edad1 > edad2 ){
    console.log("La edad 1 --> "+ edad1 +", es mayor que la edad 2 -->"+edad2);
}else{
    console.log("La edad 1 --> "+ edad1 +", es inferior que la edad 2 -->"+edad2);
}
*/


//Operadores relacionales 
/*
Mayor >
Menor <
Mayor o igual >=
Menor que o igual  =<
Distinto !=
*/





var edad = 78 ;
var nombre = "Zoila Cerda";

if(edad >= 18){
    //Es mayor de edad
        console.log(nombre+" tienes "+edad+" años, eres mayor 😎");

    if(edad < 33){
        console.log(nombre+" tienes "+edad+" Todavia eres milenial ⚡");
    }
    else if(edad >= 70){
        console.log(nombre+"lo siento, los años tocan a tu puerta 😢");
    }
    else{
        console.log(nombre+" 😅 Ya no eres milenial");
    }

}else{
    //Es menor de edad
    console.log(nombre+"tienes "+edad+" años, eres menor ");
}



/*
Operadiores logicos

AND (Y) : &&
OR (O) : ||
Negacion : !

*/


//Negacion

var Year = 2019
if (Year != 2019){

    console.log("El año no es 2019, el año es: " +Year)
}


//AND

if(Year >= 2000 && Year <= 2020  && Year != 2019){
    console.log("Estamos en la epoca actual");
} else {
    console.log("Estamos en la era post moderna");
}

//OR


if(Year == 2000 || Year <= 2020 ){
    console.log("El acaba en un rango de 8 a 9 ");
} else {
    console.log("Estamos en la era post moderna");
}

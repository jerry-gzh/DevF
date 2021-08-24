// Ejercicios condicionales 

//Ejercicio 1
//Crea un programa que pregunte al usuario un número. 
//Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 

var numero= parseInt(prompt("Escribe un numero"));
var i=1;
 do{
    var residuo=i%5;
    if(residuo==0){
        console.log(i);
    }
    i++;
 }while(i<=numero);


//Ejercicio 2 
//Crea un programa que solicite al usuario 2 números entre 1 y 50. 
//Posteriormente mostrar en consola los números del 1 hasta el 50, pero 
//añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

var num1=  parseInt(prompt("Escribe un numero"));
var num2=  parseInt(prompt("Escribe un numero"));

var i=1;
 do{
    
    if(i==num1||i==num2){
        console.log(i+' Loteria!');
    }else{
        console.log(i);
    }
    i++;
 }while(i<=50);


//Ejercicio 3 
//Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
//Para terminar el capturar el usuario debe ingresar el número 0. 
//Finalmente mostrar la lista de números capturados en pantalla o en la consola.

var arreglo = [];
var entrada ;
do{
    entrada = parseInt(prompt("ingresa un numero"));
    if( typeof(entrada) == "number" )
    {
        arreglo.push(entrada);
    }
} while(entrada != 0)
console.log( "Los numeros ingresados son", arreglo);

//Ejercicio 4 
//Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
//Para terminar de capturar el usuario no debe escribir valor alguno. 
//Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

var arreglo = [];
do{
    var userInput = prompt("Ingresa una letra o palabra");
    arreglo.push(userInput);
}while( userInput != "" )
var index = 0;
var stringFinal = "";
while( index < arreglo.length )
{
    stringFinal = stringFinal + " "+ arreglo[index];
    index++;
    //stringFinal += arreglo[index];
}
document.write(stringFinal);


//Ejercicio 5 
//Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
//El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert.
//Y seguirá pidiendo al usuario introducir otro día. 
//En caso de que el día introducido sea domingo mostrar al usuario el mensaje 
//“Ve a descansar” y terminar la captura de información.

var userInput = "";
do{
    userInput = prompt("Ingresa un dia de la semana").toLowerCase();
    var mensaje = "";
    if( userInput == "lunes" ){
        mensaje = "EL DIA DE HOY ES LUNES ANIMO";
    }else if( userInput == "martes" )
    {
        mensaje = "MARTES.. NIMODO";
    }else if ( userInput == "miercoles" )
    {
        mensaje = "OMBLIGO DE SEMANA";
    }else if ( userInput == "jueves" )
    {
        mensaje = "CASI VIERNES...";
    }else if ( userInput == "viernes" )
    {
        mensaje = "YEIIII VIERNES!!!";
    }else if ( userInput == "sabado" )
    {
        mensaje = "SABADO SIN FIESTA.....";
    }else if ( userInput == "domingo" )
    {
        mensaje = "Ve a descansar";
    }
    alert(mensaje);
}while( userInput != "domingo" );

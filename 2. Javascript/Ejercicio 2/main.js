/*var x = Math.floor(Math.random()*3); /*Generar un número aleatorio*/
/*console.log /*Imprimir */

//Ejercicio 1
/*
var belleza = prompt ("¿Eres bellisimo / a? (si/no)").toLowerCase();
if(belleza == "si" ){
    console.log ("Ciertamente")
} else if (belleza == "no" ){
    console.log ("No te creo")
}
*/


//Ejercicio 2
/*
var numero = prompt ("Escribe un número para verificar si es divisible entre dos")
if ( numero % 2 == 0 ){
    console.log ( "el numero " + numero + " es divisible entre 2")
} else {
    console.log (  "el numero " + numero + " NO es divisible entre 2")
}
*/


//Ejercicio 3
/*
var numero = prompt ("Escribe un número para verificar si es par o no")
if ( numero % 2 == 0 ){
    alert ( "el numero " + numero + " es par")
} else {
    alert (  "el numero " + numero + " es impar")
}
*/


//Ejercicio 4
/*
var numero = prompt ("Escribe tu número de cliente")
if (numero == 1000 ){
    console.log ( "Ganaste un premio")
} else {
    console.log ( numero + " Lo sentimos, sigue participando")
}
*/


//Ejercicio 5
/*
var a = parseInt(prompt ("Escribe un número"))
var b = parseInt(prompt ("Escribe otro número"))
if ( a>b){
    alert ( b + " es menor que " + a)
}else{
    alert ( a + " es menor que " + b)
}
*/


//Ejercicio 6
/*
var a = parseInt(prompt ("Escribe un número"))  
var b = parseInt(prompt ("Escribe otro número"))
var c = parseInt(prompt ("Escribe otro número"))

if (a==b && b==c){
    alert ("Los 3 números son iguales")
}else if (a==b || b==c || a==c){
    alert ("Hay 2 números iguales")
}
else if ( a > b && a > c) {
    alert ( a + " es mayor que " + b + " y " + c)
}else if ( b > a && b > c) {
    alert ( b + " es mayor que " + a + " y " + c)
}else if ( c > a && c > b) {
    alert ( c + " es mayor que " + a + " y " + b)
}
*/


//Ejercicio 7
/*
var dia =  prompt ("Ingrese un día de la semana:").toLowerCase();
if(dia == "lunes"){
   console.log("Inicio de semana")
}else if(dia == "viernes"){
    console.log("Ultimo día de trabajo")
}else if(dia == "sabado" || dia=="domingo" ){
    console.log("Fin de semana")
}else {
    console.log("A trabajar")} 
    */


//Ejercicio 8

/* var cal = parseInt(prompt ("Ingresa una calificación (entre 1 y 10)"))  
if(cal < 6 && cal >= 1){
    console.log("reprobado")}
else if (cal <= 8 && cal >= 6){
        console.log("regular")}
else if (cal == 9){
console.log("bien")}
else if (cal == 10){
console.log("excelente")}
else {
    console.log("Incorrecto")
}
 */

//Ejercicio 9

/* var sabor = prompt ("Escribe el topping que deseas para tu helado: \n- Sencillo \n- Oreo \n- Kitkat \n- Brownie").toLowerCase();
if (sabor == "oreo"){
    console.log("TOTAL: $60")
} else if (sabor == "kitkat"){
    console.log("TOTAL: $65")
} else if (sabor == "brownie"){
    console.log("TOTAL: $70")
} else{
    console.log("No tenemos este topping, lo sentimos.")
} */

//Ejercicio 10

/* var curso = prompt ("Escribe el programa de tu interés: \nCourse: $4,999 MXN\nCarrera $3,999 MXN\nMaster: $2,999 MXN").toLowerCase();
var beca = confirm ("¿Cuentas con algun tipo de beca?");
if( beca == true){
    var tipo = prompt("Escribe que tipo de beca: \n-Beca Facebook: 20% de descuento.\n-Beca Google: 15% de descuento.\n-Beca Jesua: 50% de descuento.").toLowerCase();
}

if(curso == "course"){
    var costo = 4999
    var tiempo = 2
} else if(curso == "carrera"){
    var costo = 3999 
    var tiempo = 6
} else if (curso == "master"){
    var costo = 2999
    var tiempo = 12
}

if (tipo == "facebook"){
    var descuento = 0.8
}else if (tipo == "google"){
    var descuento = 0.85
}else if (tipo == "jesua"){
    var descuento = 0.5
}else{
    var descuento =1
}

alert ("Tu pago mensual será de: $"+costo*descuento+"\nTu pago TOTAL será de: $"+costo*tiempo*descuento) */

//Ejercicio 11

/* var vehiculo = prompt("Selecciona el tipo de vehiculo:\n-Automovil\n-Motocicleta\n-Autobús").toLocaleLowerCase();
var km = parseInt( prompt ("Ingrese la cantidad de kilometros recorridos:"))
var litros = parseInt( prompt ("Ingrese la cantidad de litros consumidos:"))

if (vehiculo == "automovil"){
    var precio = 0.2
}else if (vehiculo == "motocicleta"){
    var precio = 0.1
}else if (vehiculo == "autobus"){
    var precio = 0.5 
}

if (litros <= 100){
    var extra = 5
}else {
    var extra = 10
}

alert("El pago será de:\n-Por kilometraje: $"+km*precio+"\n-Cargo extra/litros consumidos: $"+extra+"\nTOTAL: $"+((km*precio)+parseInt(extra))) */

//Ejercicios EXTRA
// Ejercicio 1
// Escriba un programa JavaScript que acepte dos números enteros y muestre el más grande

/* var a = parseInt(prompt("Ingrese un número: "));
var b = parseInt(prompt("Ingrese otro número: "));
function mayor(a,b){
    if (a>b){
        console.log(`El número ${a} es mayor que ${b}`)
    }else if (a<b){
        console.log(`El número ${b} es mayor que ${a}`)
    }else if (a=b){
        console.log(`El número ${a} es igual que ${b}`)
    }else {
        console.log("Los valores no son validos")
    }
}
mayor(a,b) */

//Ejercicio 2 
// Escriba una declaración condicional (if) de JavaScript para encontrar el signo de la multiplicación de tres números. 
//Muestre un cuadro de alerta con el signo especificado. 
//Por ejemplo si los tres números son: 1, -3 y 4, el resultado sería “-“

/* var a = parseInt(prompt("Ingrese un número positivo o negativo: "));
var b = parseInt(prompt("Ingrese otro número positivo o negativo: "));
var c = parseInt(prompt("Ingrese otro número positivo o negativo: "));
var d = 0; 
d = a * b * c
if(d>0){
    alert("La operación es + ");
} else if(d<0) {
    alert("La operación es -")
} else{
    alert("La entrada es inválida")
} */


// Ejercicio 3
// Escribe un programa de JavaScript para encontrar el mayor de cinco números.

/* var arreglo = [];
a = 0;
for(i=1; i<=5; i++){
    arreglo.push(parseInt(prompt("Ingrese un número: ")))
}
arreglo.sort(function(a, b) {
    return a - b;
});
a = arreglo.pop();
console.log(a) */

//Ejercicio 4
//Escriba un bucle for JavaScript que iterará de 0 a 15. 
//Para cada iteración, verificará si el número actual es par o impar. 
//Imprimir en cada iteración si el número es par o impar.

/* for (i=0; i<=15; i++){
    if(i%2){
        console.log(`El número ${i} es impar`)
    }else{
        console.log(`El número ${i} es par`)
    }
} */

// Ejercicio 5 
// Escriba un programa de JS que obtenga el promedio de los siguientes estudiantes,
// después determine el grado que le corresponde a ese promedio. 
// Por ejemplo si el promedio es 75 entonces el grado es C según la tabla.

/* let nombres = ["David", "Vinoth", "Divya", "Ishitha", "Thomas"]; 
let cali = [];
let grado = [];
for(i=0; i<=4; i++){
    cali.push(prompt(`Ingrese la calificación de ${nombres[i]}`));
}
for(i=0; i<=4; i++){
    if (cali[i] <= 60){
        console.log(`El grado de ${nombres[i]} es F `)
    }else if (cali[i] <= 70){
        console.log(`El grado de ${nombres[i]} es D `)
    }else if (cali[i] <= 80){
        console.log(`El grado de ${nombres[i]} es C `)
    }else if (cali[i] <= 90){
        console.log(`El grado de ${nombres[i]} es B `)
    }else if (cali[i] <= 100){
        console.log(`El grado de ${nombres[i]} es A `)
    }else {
        console.log(`La calificación no es valida `)
    }
} */

// Ejercicio 6 
//Escriba un programa JavaScript que repita los números enteros del 1 al 100. 
//Pero para múltiplos de tres imprima "Fizz" en lugar del número y para los múltiplos de cincoimprima "Buzz". 
//Para números que son múltiplos de tres y cinco, escriba "FizzBuzz".

for(i=0; i<=100; i++){
    if(i%3){
        console.log("Fizz")
    }else if(i%5){
        console.log("Buzz")
    }
}
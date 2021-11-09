/* // Ejercicios funciones

// Ejercicio 1
// Hacer una función que convierta de grados centígrados a Farenheit.
var Cent = parseInt(prompt("Ingrese temperatura en °C: "))
var Far;
function Convert (cent){
    Far = (Cent*1.8)+32 
    return `${Cent}°C equivale a ${Far} °F `
}
Convert(Cent)

// Ejercicio 2
// Hacer una función que muestre la tabla de multiplicar de un número

var Num = parseInt(prompt("Ingrese un número: "));
function Tabla(Num){
    for (var i=1 ; i<=10 ; i++){
    console.log(`${Num} x ${i} =  ${Num*i}`)
    }
}
Tabla(Num);

// Ejercicio 3 
// Escribe una función que imprima todos los números naturales de 1 hasta n (el usuario elige n)

var Num = parseInt(prompt("Escribe el número límite: "));
function Nat(lim){
    for(var i=1; i <= lim; i++){
        console.log(i);
    }
}
Nat(Num);

//Ejercicio 4 
//Escribe una función que imprima todos los números naturales en reversa, desde n (el usuario indica) hasta 1.

var Num = parseInt(prompt("Escribe el número límite: "));
function Nat(lim){
    for(var i=lim; i>0; i--){
        console.log(i);
    }
}
Nat(Num);


// Ejercicio 5 
//Escribe una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante

var a = prompt("Ingrese cualquier letra del alfabeto: ").toLowerCase();
function Verif(Let){
    if (Let === 'a'||Let === 'e'||Let=== 'i'||Let=== 'o'||Let=== 'u'){
    console.log(`${Let} es una vocal`);
    }else {
    console.log (`${Let} es una consonante`);
    }
}
Verif(a);

//Ejericio 6 
// Escriba una función donde solicite un número al usuario y calcule su factorial.

var num = parseInt(prompt("Ingrese un número para obtner su factorial"));
function fact(num){
    var b = 1;
    for(i=1; i<= num; i++){
        b *= i;     
    }
    return b; 
} 
console.log(fact(num)); */

var edad = parseInt(prompt("Ingrese la edad:"));
function mayorEdad(edad) {
  if (edad > 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
}

mayorEdad(edad);

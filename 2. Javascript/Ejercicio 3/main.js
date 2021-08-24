//Ejercicios array 

//Ejercicio 1 
//Crea un arreglo de 10 números aleatorios

var array = [];
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));
array.unshift(Math.floor(Math.random()*9));

console.log (array)

//Ejercicio 2
//Ingresa palabras separadas por comas y agregalas a un arreglo 

var string = prompt ("Ingrese palabras separadas por comas");
var array = string.split(' , ');
console.log(array);

//Ejercicio 3
//Ordena el arreglo de menor a mayor, muestra el número mayor y el menor

var array = [10,40,30,20,15,5];
array.sort(function(a, b){return a-b});
var arrayB = array.slice(0,6);
var menor = arrayB.shift();
var mayor = arrayB.pop();
console.log("Arreglo ordenado de mayor a menor: " + array + "\nNumero menor: " + menor + "\nNumero mayor: " + mayor);

//Ejericios Pokemon 


//Ejercicio 1
//Crea un programa que imprima en consola los números impares del 1 al 50.

/* var contador = 0;
for (var index = 0; index < 50; index++) {
    if (index%2) {
        contador = contador +1;
        console.log(`${index} es numero impar`);
    }
}
console.log(`de 0 a 50 existen ${contador} numero impares`) */


//Ejercicio 2 
//Crea un programa que pregunte al usuario un número. 
//Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números 
//que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 

var numero = parseInt(prompt("Introduzca un número: "));
contador = 0;
for (let index = 1; index < numero; index++) {
    if (!(index%5)) {
        contador = contador +1;
        console.log(`Pokemon número ${index}: ${pokemons[index]}`);
    }
} 

// Comprobar conexión con arreglo de pokemon, video martes  !!!! 

// Ejercicio 3 
//Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola 
//solo los elementos que son tipo número.

/* var arreglo = [4,"dos",8,"tres",5,9,1,"cero"];
for (let index = 0; index < arreglo.length; index++ ){
    if (typeof arreglo[index] == 'number' ){
        console.log(`${arreglo[index]} es un número`)
    }
}  */

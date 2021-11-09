//USO de strings

/** STRING TEMPLATE */
// Facilita la concatenacion de strings;  // El pokemon 004 es 'Charmander' charmeleon

let pokemon = {
    posicion:4,
    nombre:"charmander",
    evolucion:"charmeleon",
    ataque:"ember"
}

//vanila 
let cadena = "El pokemon 00" + pokemon.posicion + " es '" + pokemon.nombre + "' " + pokemon.evolucion;
// ES6 String Template ( ${variable} )
let cadena2 = `El pokemon 00${pokemon.posicion} es '${pokemon.nombre}' ${pokemon.evolucion}`;

console.log(cadena);
console.log(cadena2);

let string = "Hola Mundo";

// charAt

console.log("El char en la posicion 2 es :" + string.charAt(2) );
console.log("El char en la posicion X es :" + string.charAt() );

// indexOf

console.log("IndexOf letra M :", string.indexOf("M"));
console.log("IndexOf letra o :", string.indexOf("o"));

// lastIndexOf
console.log("lastIndexOf letra o :", string.lastIndexOf("o"));

// join - split

// Split: divide la cadena en base a un caracter definido por nosotros y lo convierte en un arreglo

let frutas = "platano,manzana,pera,fresa,melon";

console.log(frutas);
console.log(frutas.split(","));

// Join: une los elementos de un arreglo en una cadena con un caracter definido por nosotros

let arrayFrutas = frutas.split(",");

console.log(arrayFrutas);
console.log(arrayFrutas.join("-"));

// Replace

let texto = "Estudiar tecnologia es la mejor inversion que he hecho en mi mejor vida";
const palabra = "mejor";

console.log("- Original: ", texto);
console.log("- Replace: ", texto.replace( palabra,"peor" ) );

//replaceall no funciona en node solo en el navegador

console.log("- Cambiar todo: ", texto.split(palabra).join("peor") );


// includes regresa falso o verdadero

console.log(`La palabra "${palabra}" ${  texto.includes(palabra) ? 'esta' : 'no esta' } en la oracion`);

texto = "Hola a todos ";

console.log(`La palabra "${palabra}" ${  texto.includes(palabra) ? 'esta' : 'no esta' } en la oracion`);
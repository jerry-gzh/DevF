/** Operador Ternario */
// Es un if/else de una sola linea
// SINTAXIS  (condicion) ? condicionVerdadero : condicionFalso

//Vanilla

let edad = 21;

if( edad >= 18 )
{
    console.log("Es mayor de edad");
}else
{
    console.log("Es menor de edad");
}

// Ternario

console.log("con ternario...");

(edad >= 18 && edad >= 21) ? console.log("Es mayor de edad (ternario)") : console.log("Es menor de edad (ternario)");
// NOTA: solo puede ejecutar una instruccion en cada resultado

edad = 17;
const esMayorEdad = ( edad >= 18 ) ? "Es mayor de edad" : "Es menor de edad" ;
console.log(esMayorEdad);
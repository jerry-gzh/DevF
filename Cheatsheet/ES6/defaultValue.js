/** verificar si tiene un valor y si no asignar uno por defecto */

const ejemplo1 = "mi Valor";
// || lo colocamos cuando queremos tener un valor por defecto;
// Ejemplo si tiene valor
const ejemplo2 = ejemplo1 || "Valor por defecto";

console.log( "Verificando valor de ejemplo2 ", ejemplo2 );

//Ejemplo cuando no tiene valor
// Falsy : undefined || 0 || "" || null = falso

const ejemplo3 = undefined;
const ejemplo4 = ejemplo3 || "Valor por default";

console.log("Verificando valor de ejemplo 4 -> ",ejemplo4);

const ejemplo5 = "";
const ejemplo6 = ejemplo5 || "Valor por default";

console.log("Verificando valor de ejemplo 6 -> ",ejemplo6);


const ejemplo7 = 0;
const ejemplo8 = ejemplo7 || "Valor por default";

console.log("Verificando valor de ejemplo 8 -> ",ejemplo8);
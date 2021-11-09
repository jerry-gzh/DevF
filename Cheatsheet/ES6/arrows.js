// Arrow functions
// la flecha => reemplaza la palabra function y el nombre


/*
    sintaxis   ( ) => { }
1- Los parantesis son para los parametros / si solo es un parametro pueden omitirse los pàrentesis / si no lleva parametros se colocan vacios
2- La flecha va obligatoriamente (  => ) 
3- si solo ejecutamos una instruccion se pueden omitir las llaves, si son 2 o mas necesitan colocar las llaves ({})
*/


// JS Vanilla

function suma(num1,num2)
{
    return num1 + num2;
}
console.log("Suma vanilla: ", suma(10,50));

//ES6

const sumar = (num1,num2)=>{
    let c = num1 + num2;
    return c;
};
console.log("Suma ES6: ", sumar(10,50));

// Solo ejecuta una instruccion
const ejSuma = (a,b)=> a+b; 
console.log("Suma arrow function:",ejSuma(10,50));

const saludar = nombre => "Hola " + nombre; // cuando solo recibe un parametro se pueden evitar los parentesis
console.log(saludar("Carlos"));


const alumnos = [ 'Adrian', 'Gerardo', 'Jhon', 'Merly','Ahiram','Fiorella', 'Brenda' ];

alumnos.forEach(item => console.log(item)); // la flecha => reemplaza la palabra function y el nombre

// function imprimir(){ console.log }
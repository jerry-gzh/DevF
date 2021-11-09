// ARRAYS - MAP / FILTER 

const myArray = [1,5,9,15,20];

//          Vanilla

const myArrayCuadrado = [];

for (let i = 0; i < myArray.length; i++) {      // i = 0; i = 1; i= 2;
    const numero = myArray[i];                  // numero = 1; numero = 5; numero = 9;
    myArrayCuadrado.push( numero**2 );          // push al nuevo array
}

console.log("\n -- Vanilla -- ")
console.log(myArray);
console.log(myArrayCuadrado);

//          MAP

// Integra un for dentro de su funcionamiento, 
// genera un ciclo por cada uno de los elementos del arreglo
// por si mismo determina el número de iteraciones
// por cada iteracion genera 2 variables
// * item = elemento del arreglo  
// * index = posicion (opcional)

// en la iteracion 0  = item = 1; index = 0;
// en la iteracion 1 = item = 5; index = 1;
// en la iteracion 2 = item = 9; index = 2;

// map regresa un nuevo arreglo, no modifica el arreglo original
// siempre debe regresar un valor

const myArrayCuadrado2 = myArray.map( (item,index) => {
    console.log(index + "->" + item);
    return item**2;
} )

console.log("\n -- Map --");
console.log(myArray);
console.log(myArrayCuadrado2);


//          FILTER
// Devuelve un nuevo arreglo con los elementos que cumplan alguna condicion
// el index es opcional
// siempre debemos retornar un valor

const multiplos = myArray.filter( (numero,index) =>{
    const data = (( numero % 2 ) === 0) ? numero : null; // valida que sea numero par
    return data; 
});

console.log("\n -- Filter --");
console.log(myArray);
console.log(multiplos);

//          FIND
// Retorna el valor si lo encuentra, si no lo encuentra retornar undefined

const numeroEncontrado = myArray.find( (numero)=>{
    // debo retornar el resultado de una condicion : boolean true/false
    return numero === 15
});

console.log("\n -- Find --");
console.log("Encontre el numero :",numeroEncontrado);


//          Ejemplos

const dataAlumnos = [
    {
        name:"Carlos",
        edad:29,
        posicion:"Sensei"
    },
    {
        name:"Ahiram",
        edad:15,
        posicion:"Sensei"
    },
    {
        name:"Oliver",
        edad:27,
        posicion:"Alumno"
    },
    {
        name:"Jorge",
        edad:32,
        posicion:"Alumno"
    }
]

//Obtener un arreglo con las personas de mas de 20 años
    const personas20 = dataAlumnos.filter((alumno)=>{
        //const edad = alumno.edad
        const { edad } = alumno;
        return edad > 20;
        // return alumno.edad > 20;
    });
    console.log("\n -- Ejemplos --");
    console.log("Mayores de 20 años", personas20);

// Obtener un arreglo que solo tenga los nombres
    const nombreAlumnos = dataAlumnos.map( (alumno)=> alumno.name );
//const nombreAlumnos = dataAlumnos.map( (alumno)=> { name:alumno.name, edad:alumno.edad } ); // NO acepta dos parámetros
    console.log(`Nombres de los alumnos: ${nombreAlumnos}`);


const myFinalArray = dataAlumnos
    .filter( (alumno) => alumno.edad > 20   )
    .map( (alumno) => alumno.name )
console.log(`Nombres alumnos mayores a 20: ${myFinalArray}`);
console.log(myFinalArray);

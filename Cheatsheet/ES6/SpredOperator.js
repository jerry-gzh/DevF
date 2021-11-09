//Spread Operator Arreglos
// operador  ...

// fusionando el contenido de los arreglos

const alumnos = ["Merly", "Adrian", "Jorge", "Jhon"];
const senseis = ["Ahiram", "Carlos"]

const g10 = [...alumnos,"Fiorella", "Leo", "Martin", ...senseis, "Brenda"];

console.log(alumnos);
console.log(senseis);
console.log(g10);


//Spread Operator con objetos

let infoAlumno = {
    nombre:"Jorge",
    apellido:"Mendoza",
    email: "jorge@ejemplo.com"
}

let infoComplentaria = {
    modulos:["Intro a HMTL", "Intro a JS", "Computer Science"],
    hobies: ["Hacer bebidas"],
    direccion: "SU casa 123",
    nombre:"Jhon",
    nombre:"Carlos"
}
// las propiedades que tienen el mismo nombre se sobreescriben


let alumno = {
    ...infoAlumno,
    usuario : "jorgeM",
    ...infoComplentaria,
    peliculaFavorita : "Marvel",
    nombre:"Adrian"
}

console.log(alumno);
// Declaración de clases 

// Usando un arreglo en constructor
/* class Alumnos {
    constructor(nombre, apellido, califFinal, inscrito){ 
        this._nombre = nombre;
        this._apellido = apellido;
        this._califFinal = califFinal;
        this._inscrito = inscrito;
    }
}
const Alumno1 = new Alumnos("Luis", "Juarez", 20, true); 
console.log(Alumno1); */


// Usando objetos literales en el constructor
var promedio = 0;
var sum = 0;

class Alumnos {
    constructor({nombre, apellido, califFinal, inscrito}){ //Al declararse como objetos se llamarán como objetos literales
        this._nombre = nombre;
        this._apellido = apellido;
        this._califFinal = califFinal;
        this._inscrito = inscrito;
        this._calificaciones = [];
    }

    obtenerInicialesDeAlumno(){
        return this._nombre[0] + this._apellido[0];
    }
    obtenerNombreCompleto(){
        return this._nombre +" "+ this._apellido;
    }
    Aprobado(){
        if(this._califFinal >= 60){
            console.log("Aprobado");
        }else{
            console.log("Reprobado");
        }
    }
    Agregar(materia, promedio){
        this._calificaciones.push({materia, promedio});
        return `Calificación registrada`
    }
    PromedioGral(){
        for ( var i=0; i< this._calificaciones.length; i++){
            sum = sum + this._calificaciones[i].promedio;
        }
        promedio = sum / this._calificaciones.length;
        return `El promedio es ${promedio}`
    }
}
const Alumno1 = new Alumnos({nombre:"Luis", apellido: "Juarez", califFinal:65, inscrito:true}); //LLamada de objetos 

console.log(Alumno1.obtenerInicialesDeAlumno());
console.log(Alumno1.obtenerNombreCompleto());
console.log(Alumno1.Aprobado());
console.log(Alumno1.Agregar('matematicas', 8));
console.log(Alumno1.Agregar('historia', 7));
console.log(Alumno1.Agregar('letras', 2));
console.log(Alumno1.PromedioGral());

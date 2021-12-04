import React, { useEffect, useState }from 'react'
import useForm from "../Hooks/useForm";

export default function Form() {

/*  ¡¡¡ Mala práctica !!!
No se debe declarar un estado por cada variable ya que támbien necesitaríamos declarar una función para cada var.

const [nombre, setNombre] = useState ("")
const [apellido, setApellido] = useState ("")
const [edad, setEdad] = useState ("")

const handleInput = (event) => {
  setNombre(event.target.value);
  console.log(nombre);
}
*/
const [datos, setDatos] = useState ({});
/* const handleInput = () => {}; // NO error 
const handleSubmit = (event) => {
  event.preventDefault() // Evita recargar la página al enviar el formulario
  console.log(event);
};// Se sustituye en el useForm
*/

useEffect(() => { // En esta función simulamos una llamada a la API
  setTimeout( () => {
    const  info = {
      "nombre": 'Martin',
      "apellidos": 'HP',
      "edad": 28,
      "genero": 'Masculino',
      "email": 'martinhp@gmail.com',
      "password": '123456'
    }
    setDatos(info);
  },1000);
}, []); // Solo se va a ejecutar cuando se "monta" el componente
console.log(datos);

 //Función que emula enviar datos a la API
const sendData = (datos) => {
  // Toda la lógica de hacer un post
  console.log("Datos enviados" + JSON.stringify(datos));

}

const {inputs, handleInput, handleSubmit} = useForm(sendData, datos) //Custom Hook, sendData es la función que se ejecutará al usar useForm

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label>Nombre </label>
        <input 
        type ="text"
        name = "nombre"
        placeholder = "Pon tu nombre"
        onChange = {handleInput}
        value = {inputs.nombre} 
        />
        <label>Apellidos </label>
        <input 
        type ="text"
        name = "apellido"
        placeholder = "Pon tu apellido"
        onChange = {handleInput}
        value = {inputs.apellidos} 
        />
        <label>Edad </label>
        <input 
        type ="number"
        name = "edad"
        placeholder = "Pon tu edad"
        onChange = {handleInput}
        value = {inputs.edad} 
        />
        <label>Genero </label>
        <input 
        type ="text"
        name = "genero"
        placeholder = "Pon tu genero"
        onChange = {handleInput}
        value = {inputs.genero} 
        />
        <label>Email </label>
        <input 
        type ="text"
        name = "email"
        placeholder = "Pon tu email"
        onChange = {handleInput}
        value = {inputs.email} 
        />
        <label>Contraseña </label>
        <input 
        type ="password"
        name = "password"
        placeholder = "Pon tu password"
        onChange = {handleInput}
        value = {inputs.password} 
        />
        <button type = "submit" >Enviar</button>
      </form>
    </div>
  )
}

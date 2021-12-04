/* REGLAS PARA CREAR UN HOOK  

1. Siempre se deben llamar empezando con use, useLoQueSea
2. Siempre son funciones --> REACT FUNCIONAL
*/

import {useState} from 'react';

export default function useForm(callback, datos) {
  const [inputs, setInputs] = useState(datos) // Vamos a guardar los valores del formulario, datos son los elementos que están en el formulario
  console.log(inputs);
  const handleInput = (event) => {
    const { name, value} = event.target;
    console.log(name,value);
    setInputs ({...inputs, [name]:value}); // El spreadOperator(...) sobreescribe los valores (value) en el input (name) correspondiente.
    console.log(inputs);
  };
 
   const handleSubmit = (event) => {
    event.preventDefault() // Evita refresh de la página
    callback(inputs)
  }

  return { // El hook no regresa JSX
    inputs,
    handleSubmit,
    handleInput
  };
}



//Hook que nos ayuda a manejar el ciclo de vida
//servirá para hacer llamadas a API
//se ejecuta cada vez que nuestro componente se renderice (cuando se monta, cambio de estado, recibir props nuevas)


import React, {useEffect} from 'react'; // siempre agregar

function Ejemplo(){
  useEffect(function(){ // Recibe una función que se ejecuta cada vez que el componente se renderiza
    console.log('render!')
  },[]) //[] indica que solo se ejecuta la primer vez, useEffect está escuchando cambios dentro de [], si se omite, se estará ejecutando todo el tiempo 

  return <span> Ejemplo de useEffect</span>
}
// Hook que nos permite tener un estado y poder actualizarlo 

// count: nombre de la variable o estado 
// setCount: método que actualiza el estado
// useState: declara el valor inicial  

//el nombre de la variable es libre, el set deberá llevar el nombre de la variable en "camelCase"


import React, {useState} from 'react'; // Siempre agregar 


function Example (){
    const [count, setCount]= useState(0);
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>
                Click me
                </button>
        </div>
    );
}

// Ejemplo 

import React , {useState} from "react";

function Counter(){

    return(
        <div >
            <h1 >Yo soy el componente counter</h1>
            <p>{contador}</p>
            <button onClick={()=>{
                setContador(contador +1);
            }}>Sumar 1</button>
            <button>Restar 1</button>
        /</div>
    )
}

export default Counter;
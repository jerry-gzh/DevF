import React , {useState, useEffect} from "react"; //Siempre incluir import

function Counter(props){
    // Aquí va la lógica 
    // useState nos va a devolver un arreglo con 2 elementos
    // Posición 0: El valor del estado (variable)
    // setPosición 1: La función para actualizar mi estado
    // useState(): recibe el valor inicial de la variable

    const [contador, setContador] = useState(0);
    const [nombre] = useState("Jerry");

    //useEffect se ejecuta al inicio y cada vez que se actualiza el estado, props o contexto
    useEffect(()=>{
        console.log("Hola desde useEffect, siempre se ejecuta");
    });

    useEffect(()=>{
        console.log("Hola, solo inicio");
    },[]); //[] Indica que sólo se ejecutará al inicio

    //Se va a ejecutar al inicio y cuando cambie la variable que está escuchando
    useEffect(()=>{
        console.log("Hola, me ejecuto cuando cambia contador");
    },[contador]);

    useEffect(()=>{
        console.log("Hola, me ejecuto cuando cambia nombre");
    },[nombre]);

    return( // Retorna lo que se verá en pantalla
        <div className= "counter" >
            <h1>Yo soy el componente counter</h1>
            <h2>Hola: {nombre} {props.apellido}. Tienes {props.edad} años</h2>
            <p>{contador}</p>
            <button onClick = {()=>{
                 setContador(contador+1);
            }}>Sumar 1</button>
            <button onClick = { ()=>{
                setContador(contador-1)
            }}>Restar 1</button>
        </div>
    )
}

export default Counter; //Funcion para exportar  
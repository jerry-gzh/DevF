import React,{useState, useEffect, useRef } from 'react'

export default function Counter() {

    const [ count, setCount ] = useState(0);
    const botonContadorRef = useRef();
    const cuentaRenderizado = useRef(0);
    const nombre = useRef('Carlos'); // Los cambios de valores de useRef se realizan en memoría pero no hacen cambios en el DOM, no se renderizan por si mismos.

    useEffect( ()=> {  //useEffect se ejecuta cuando se detecta un cambio 
        console.log(botonContadorRef.current.innerText = 'Hola!');
        if( cuentaRenderizado.current === 0 )
        {
            cuentaRenderizado.current = cuentaRenderizado.current + 1;
            return;
        }
        console.log( `El valor inicial del contador es ${count}` );
        console.log(cuentaRenderizado.current);
    },[ count ] ) // count es la variable que se está monitoreando

    const changeName = () =>{
        nombre.current = 'Ahiram';
        console.log(`TU NUEVO NOMBRE ES ${ nombre.current }`);
    }

    return (
        <div>
            <h1> Contador : { count } </h1>
            <button ref={ botonContadorRef } onClick={ ()=> { setCount( count+1 ) } } > Sumar 1 </button>

            <h1> Nombre: { nombre.current } </h1> {/*current se usará para acceder al valor cuando se declara desde useRef */}
            <button onClick={ changeName } > Cambiar nombre </button>
        </div>
    )
}

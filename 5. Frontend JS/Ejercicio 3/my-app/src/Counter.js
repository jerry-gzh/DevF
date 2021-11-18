//Importar react al crear un componete

import React from "react";
import "./Counter.css";

//Declaramos nuestra clase que será el nombre de la clase 
//En caso de que sean dos palabras CamelCase
//Todos nuestros componentes deben heredar de React.Component

export default class Counter extends React.Component{ // Export default es para poder exportar la clase
    constructor(props) // se ejecuta cuando se manda llamar Counter
    {
        super(props);// super : manda llamar el constructor de la clase padre
                    // los props son datos de solo lectura

        this.state={ //State es un dato que si se puede modificar
            count: props.initCount // init count se recibe por parametro y es  el valor inicial del contador
        }
        // Se usa el método setState para hacer modificaciones al "initCount"
        // el state se va a encargar de modificar el DOM
    }

    // todos los componentes deben tener un metodo RENDER 
    render(){
        //debemos retornar codigo JSX
        return(
            <div className="Counter-main">
                <h5>{this.state.count}</h5>
                <div className="Counter-buttons">
                    <button onClick={ ()=>{ this.setState({count:this.state.count + 1}) } }>Agregar</button> 
                    <button onClick={ ()=>{ this.setState({count:this.state.count - 1}) } } >Disminuir</button>
                </div>
            </div>
        );
    }   
}

// El set statSTate indica que hubo un cambio de valores para que se renderice de nuevo
import React from "react";
import "./Counter.css";

//Declaramos nuestra cñase que será el nombre de la clase 
//En caso de que sean dos palabras CamelCase
//Todos nuestros componentes deben heredar de React.Component

class Counter extends React.Component{
    constructor(props)
    {
        super(props);// super : manda llamar el constructor de la clase padre
        this.state={
            count: props.initCount // init count se recibe por parametro y es  el valor inicial del contador
        }
        // el state se va a encargar de modificar el DOM
    }

    // todos loc omponentes deben tener un metodo RENDER 
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
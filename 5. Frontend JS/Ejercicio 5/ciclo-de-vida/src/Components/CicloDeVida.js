import React from 'react'
import Contador from './Contador';

export default class CicloDeVida extends React.Component{
    constructor(props){
        super(props);
        console.log("Desde constructor")
        this.state={
            contador:0,

        };
    }

    iniciarContador = () => {
        setInterval(()=>{
            this.setState({contador: this.state.contador + 1})
        },1000)
    }

    componentWillMount(){
        // Ya ni se usa
        console.log("1 - Antes del render");
    }

    componentDidMount(){
        console.log("Después de que se renderiza");
    }

    componentDidUpdate(prevProps, prevState){
        // Ya ni se usa
        console.log("El estado se actualizó");
        console.log(prevState);
    }

    render(){
            console.log("El componente");
        return(
            <div>
                <h1>Ciclo de vida </h1>
                <h3>{this.state.contador}</h3>
                <button onClick={this.iniciarContador}>Iniciar contador</button>

                <Contador contador={this.state.contador}/>
            </div>
        )
    }
}
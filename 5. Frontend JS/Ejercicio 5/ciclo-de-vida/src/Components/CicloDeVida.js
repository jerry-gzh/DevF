import React from "react";
import Contador from "./Contador";

export default class CicloDeVida extends React.Component {
  constructor(props) {
    super(props);
    console.log("0 - Console desde el constructor");
    this.state = {
      contador: 0, //Inicializamos contador 
      mostrarContador: false,
      intervalo: null,
    };
  }
  componentWillMount() {
    //Ya no se usa
    console.log("1 - Antes del render");
  }
  componentDidMount() {
    console.log("3 - Despues de que se renderiza");
  }

  UNSAFE_componentWillUpdate(){ // Ya no se usa 
    console.log("Se va a actualizar");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("El estado se actualizó");
    console.log(prevState); // Estado previo
    console.log(this.state);
  }
  componentWillUnmount() {
    console.log("Se elimina ciclo de vida");
  }
  iniciarContador = () => {
    this.state.intervalo = setInterval(() => { // función de react setInterval indica que se ejecuta la función cada segundo. 
      //Actualizar nuestro contador
      this.setState({
        contador: this.state.contador + 1,
        mostrarContador: true,
      });
    }, 1000);
  };
  detenerContador = () => {
    this.setState({ mostrarContador: false });
    clearInterval(this.state.intervalo);
  };
  render() {
    console.log("2 - El componente se dibuja en el DOM");
    return (
      <div> {/*Dentro del return solo se puede regresar un paquete por lo que todo se envuelve en un div */}
        <h1>Ciclo de Vida</h1>
        {this.state.mostrarContador ? (
          <Contador contador={this.state.contador} />
        ) : null}
        {/*{this.state.bandera && <Contador />}*/}
        <button onClick={this.iniciarContador}> Iniciar contador </button>
        <button onClick={this.detenerContador}> Detener contador</button>
      </div>
    );
  }
}

import React  from "react";
import './Formulario.css'

export default class Formulario extends React.Component
{
    constructor(props){
        super(props);

        this.state = 
        {
            valorFormulario: ""
        }

        console.log(this.state.valorFormulario);
    }
    render()
    {
        return(
            <div> {/* El return sólo puede regresar 1 paquete por lo que todo se "envuelve" en un div */}
                <input type="text" onKeyUp={ async (e)=>{  {/* async se agrega al inicio de la función */} 
                    console.log(e);
                    console.log("estado actual",this.state.valorFormulario); 
                    await this.setState({valorFormulario:e.target.value});  {/*Ya que la función setState es una función asíncrona se agrega "async-await" */}
                    console.log("nuevo estado",this.state.valorFormulario); 
                    } } ></input>
                <span>{this.state.valorFormulario} </span>
                <h1>Hola mundo</h1>
            </div>
        );
    }
}
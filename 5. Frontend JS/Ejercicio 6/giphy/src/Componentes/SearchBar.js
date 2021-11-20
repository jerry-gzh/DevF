import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            busqueda: "" //Objeto donde se guarda el valor  de la busqueda a realizar, si esta vacia no hemos buscado nada
        }
    }

    render()
    {
        return (
            <div className="search-bar">
                <input className="search-input"
                placeholder="¿Que deseas buscar?"
                name="search"
                onChange={ (event) => this.setState({busqueda:event.target.value}) } //Target.value saca el texto que se va escribiendo en el campo del formulario
                />

                <button className="search-button" type="button" onClick={ ()=>{ this.props.emitSearch(this.state.busqueda) } }>Buscar</button>
            </div> // emit es el parámetro de regreso del props
        );
    }

}
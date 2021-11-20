import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      busqueda: "" // La busqueda a realizar 
    }
  }

  render()
  {
    return(
      <div className = "search-bar">
        <input className = "search-input"
        placeholder = "¿Qué show buscas?"
        name = "search"
        onChange = {(event) => this.setState({busqueda:event.target.value})}
        />
        <button className = "search-button" type = "button" onClick={()=>{this.props.emitSearch(this.state.busqueda)}}>Buscar</button> 
      </div>// => para que se ejecute una vez con el evento
    );
  }
}
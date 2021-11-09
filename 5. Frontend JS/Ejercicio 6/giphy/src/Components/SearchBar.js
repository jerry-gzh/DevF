import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="search-bar">
                <input className="search-input"
                placeholder="¿Qué deseas buscar?"
                name="search"
                />

                <button className= "Buscar"></button>
            </div>
        )
    }
}
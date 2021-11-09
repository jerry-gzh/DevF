import React from `react`;
import `./Header.css`;

export  default class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            nombre:"Carlos",
            apellido: "Burgueño",
            username: "cburguenog"
        },
    }

}

render ()
{
    return(
        <div className="container">
        <ul className="info">
            <li>{this.state.nombre} </li>
            <li>{this.state.apellido} </li>
            <li>{this.state.username} </li>
        </ul>
        </div>)
}
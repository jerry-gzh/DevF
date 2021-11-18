import React from 'react';
import './Header.css';


export default class Header extends React.Component{

    constructor(props)
    {
        super(props);

        this.state ={
            menu:[
                {
                    text:'Quien Soy',
                    url:'quienSoy'
                },
                {
                    text:'Experiencia',
                    url:'exp'
                },
                {
                    text:'Fun Facts',
                    url:'fun'
                },
                {
                    text:"videojuegos",
                    url:"games"
                }
            ],
            username:"@cburguenog"
        };
        
    }

    render() // es lo que pintara en el navegador
    {
        const menuOptions = this.state.menu.map( (item,i)=>{ 
            return <a className="nav-link" key={i} href={ item.url }>{item.text}</a>
        })

        console.log(menuOptions);
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark body-text">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#top">{ this.state.username }</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            { menuOptions }
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}
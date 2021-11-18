import React from "react";
import './AcercaDeMi.css'

import Lista from "./Lista";

export default class AcercaDeMi extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props.curiosidades);
    }

    render()
    {
        return (
            <section className="col-12 col-md-8">
                <h2 className="h2">Acerca de Mi</h2>
                <article>
                    <p className="text-break" >
                        Mi nombre completo es Carlos Gilberto Burgueño Garcia soy originario de Mazatlán Sinaloa y actualmente tengo 28 años, mi amor por la tecnologia nace cuando mi padre llego una navidad con un NES cuando tenia 5 años desde entonces surgio una gran pasion vigente al dia de hoy. Programador Senior en COPPEL 9 años de experiencia, Fanatico de los autos, la musica ❤ ,la cultura japonesa.
                    </p>

                    <span>Aprendiz de todo.. Experto en nada</span>

                    <Lista curiosidades={this.props.curiosidades} />
                </article>
            </section>
        );
    }
}
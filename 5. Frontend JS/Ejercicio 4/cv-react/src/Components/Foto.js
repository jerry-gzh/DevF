import React from "react";
import './Foto.css'

import Lista from "./Lista";

export default class Foto extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (<div className="row bg-picture justify-content-center" >
            <img style={{backgroundColor:this.props.bgColor}} className="img-fluid rounded-circle img-profile " src={this.props.srcFoto} ></img>
            <Lista curiosidades={["Ahiram","Belem","Oliver","Adrian","Merly","Jorge","Jerry"]}/>
        </div>);
    }
}
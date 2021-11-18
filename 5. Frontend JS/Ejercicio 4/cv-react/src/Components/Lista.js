import React from "react";
import './Lista.css'

export default class Lista extends React.Component
{

    constructor(props)
    {
        super(props);
    }


    render()
    {
        return (
            <ul>
            {
                this.props.curiosidades.map((item,index)=>{
                    return (<li key={index} >{ item }</li>)
                })
            }
            </ul>
        );
    }

}
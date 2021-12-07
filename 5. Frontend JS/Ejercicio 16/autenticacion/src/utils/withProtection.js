// Este archivo se usará como un HOC para proteger un componente
// HOC es un componente de orden superior que nos ayuda a compartir lógica 
// Reutilizar la l+ogica de un component y puede aplicarse en cualquier componente
import React, {useState} from "react";
import {Redirect} from "react-router-dom";

export default  function withProtection(Component){
  //Verificamos si tenemos un token, si no lo tenemos no mostramos el componente
  const ProtectedComponent = (props) => {
    const [token] = useState(window.localStorage.getItem('token'));// Local storage guarda el token

    return token ? <Component {...props} /> : <Redirect to = "/login"/>
  };
  return ProtectedComponent;
}
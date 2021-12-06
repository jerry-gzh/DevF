import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useUserContext } from '../../context/UserContext';


export default function ListUsers() {
  const context = useUserContext();
  // listUsers, usuarioActual, setUsuarioActual
  return (
    <div>
      {context.listaUsuarios.map((user) => (
        <p key={user.id} onClick= {() => context.setUsuarioActual (user)}>{user.name}</p>
      ))}
    </div>
  )
}
 
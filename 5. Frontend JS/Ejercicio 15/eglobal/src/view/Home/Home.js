import React from 'react'
import DetaliUsers from '../../components/DetailUsers/DetaliUsers'
import ListUsers from '../../components/ListUsers/ListUsers'
import { UserProvider } from '../../context/UserContext'
import "./home.css"

export default function home() {
  return (
    <UserProvider>
      <div className = "home-container">
        <div className = "home-container-izquierdo">
          <h2>Lista de usuarios</h2>
          <ListUsers/>
        </div>
        <div className = "home-container-derecho">
          <h2>Detalle de usuarios</h2>
          <DetaliUsers/>
        </div>
      </div>
    </UserProvider>
  )
}

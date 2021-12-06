import React from 'react'
import { useUserContext } from '../../context/UserContext'

export default function DetaliUsers() {
  const context = useUserContext();
  return (
    <div>
      <p>Componente detalles de usuario</p>
      <p>{context.usuarioActual.name}</p>
      <p>{context.usuarioActual.username}</p>
      <p>{context.usuarioActual.email}</p>
    </div>
  )
}

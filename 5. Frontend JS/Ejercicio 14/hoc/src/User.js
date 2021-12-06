// Manera tradicional de tener todo en un componente 

import React, {useEffect, useState} from 'react'

export default function User({user}) {

  // Aqui se muestra el render de la información
  return (
    <div>
      <h2>
        {user.name} <br/>
        {user.username} <br/>
        {user.phone} <br/>
        {user.website} <br/>
      </h2>
      <span>
        {user.email}
      </span>
    </div>
  )
}

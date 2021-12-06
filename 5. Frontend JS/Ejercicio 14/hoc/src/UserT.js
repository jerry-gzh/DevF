// Manera tradicional de tener todo en un componente 

import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function User() {
  const [user, setUser] = useState({});

  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then ( response => setUser(response.data))
  }, [] )

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

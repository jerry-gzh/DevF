import React, {useEffect, useState} from 'react';
import ListaContactos from './ListaContactos';

export default function HomeLista() {
  const[contactos, setContactos] = useState ([]);
  useEffect (()=>{
    setTimeout(()=>{
      setContactos([
        {nombre:"Adrian", telefono: 5525252525},
        {nombre:"Jhon", telefono: 3333333333},
        {nombre:"Belem", telefono: 42222225252},
      ]);
    },2000);
  },[]);
  return (
    <>
      {contactos.length === 0 ? (
        <h2>Cargando....</h2>
      ) : (
        <ListaContactos lista={contactos} />
      )}
    </>
  )
}

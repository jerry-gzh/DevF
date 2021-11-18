import React from 'react'

export default function ListaContactos({lista}) { //Recibimos una lista de contactos
  const renderizarContactos = () => {
    return lista.map((contacto) => (
      <p>
        {contacto.nombre} - {contacto.telefono}
      </p>
    ));
  };
  return (
    <>
      <h1>Esta es mi lista de contactos:</h1>
      {renderizarContactos()}
    </>
  );

}

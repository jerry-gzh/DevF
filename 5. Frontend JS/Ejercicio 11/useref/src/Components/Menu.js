import React, { useRef, useEffect, useState } from "react";

export default function Menu() {
  /*let menu = document.getElementById("menu");
  menu.style.display = "none";*/ // No se puede manipular el DOM directamente
  const [pais, setPais] = useState("Mexico");
  let refMenu = useRef();
  console.log(refMenu);
  let refMenuLista = useRef();
  let cuentaRenderizado = useRef(0);

  useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }
    console.log("HOLAAAA se esta volviendo a renderizar");
    console.log(cuentaRenderizado);
  });

  const ocultarMenu = () => {
    if (refMenu.current.textContent === "Cerrar") {
      refMenuLista.current.style.display = "none";
      refMenu.current.textContent = "Abrir";
    } else {
      refMenuLista.current.style.display = "block";
      refMenu.current.textContent = "Cerrar";
    }
  };

  const changeCountry = () => {
    setPais(pais + " BONITO");
  };
  
  return (
    <>
      <h1>MENU </h1>
      <button ref={refMenu} onClick={ocultarMenu}>
        Cerrar
      </button>
      <ul ref={refMenuLista} id="lista">
        <li>Hola</li>
        <li>Estamos</li>
        <li>Aprendiendo</li>
        <li>UseRef</li>
      </ul>
      <h2>{pais}</h2>
      <button onClick={changeCountry}>Cambiar país</button>
    </>
  );
}

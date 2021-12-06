import React, {useState, useEffect, useContext} from "react";
import axios from "axios";

// Context nos ayuda a manejar los estados globales de React, para compartir la misma información entre distintos 
// componentes sin importar su nivel y jerarquía. 

// Paso 1: Crear el contexto 

const UserContext = React.createContext();

// Paso 2: Crear un proveedor del contexto (estado global)

function UserProvider (props){
  const [listaUsuarios, setListaUsuarios] = useState ([]); //Lista  usuarios 
  const [usuarioActual, setUsuarioActual] = useState ({}); // Usuario actual detalles 

  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then ((response) => {
      console.log(response.data);
      setListaUsuarios(response.data);
    })
    .catch((e) =>{
      console.log(e);
    });
  }, []);
  
  const value = {
    listaUsuarios, 
    usuarioActual,
    setUsuarioActual
  }

  return <UserContext.Provider value ={value}{...props}/>; // Aquí se crea el proveedor
}

//Paso 3: Crear el consumidor del contexto
// Es la forma para acceder a los datos

const useUserContext = () => {
  const context  = useContext(UserContext)
  return context;
};

//Paso 4: Exportar el proveedor y el consumidor para que se puedan utilizar en los demás componentes

export {UserProvider, useUserContext};

//Uso del contexto

// Paso 5: Es ir a un componente superior (en este caso HOME) y "envolver" a los componentes que harán uso del contexto 

// Paso 6: Consumir el contexto (DetailsUser y ListUser) > useUserContext


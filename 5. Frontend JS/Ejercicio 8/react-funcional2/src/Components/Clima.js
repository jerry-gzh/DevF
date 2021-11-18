import React , {useEffect, useState} from "react";
import axios from "axios";

export default function Clima (){
    const[datosApi, setDatosApi] = useState({});// Aquí se guarda la respuesta de la API 
    const [valorInput, setValorInput] = useState ("");// Guarda valor input
    const [ciudad, setCiudad] = useState ("Morelia");// Guarda la ciudad a buscar
    const apiKey = process.env.REACT_APP_WEATHER_KEY; //Key API 
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;


        useEffect(()=> {
            console.log("Antes");
            axios.get(url).then((res) => setDatosApi(res.data));// Llamada a la API y lo manda a setDatosApi, PROMESA 
            console.log(("Después"));
        },[url]);// [] indica que solo se ejecuta la primer vez, useEffect está escuchando cambios en la url

        // Funcion para actualizar el estado del input
        const inputHandler = (event) =>{ //Ligado al OnChange
            console.log(event);
            setValorInput(event.target.value); //Actualizando el estado de valorInput
            console.log(valorInput);
        };
        //Pongo el valor final de mi input en el estado "ciudad"
        //actualizará la URL por lo tanto se vuelve a ejecutar el useEffect
        const submitHandler = () =>{ // Ligado al boton
            setCiudad (valorInput);
        };

        return (
            <div>
                <h1>Clima</h1>
                <div className="div_datos">
                    <input
                    type= "text"
                    placeholder= "Ingresa tu ciudad"
                    onChange={inputHandler}
                    value={valorInput}
                    />
                    <button onClick= {submitHandler}>Buscar clima</button>
                </div>
                <h2>{datosApi.name}</h2>
                {datosApi.main ? ( //Datos de respuesta
                    <div className="infoClima">
                        <img className = "infoClima__imgClima"
                            src={`http://openweathermap.org/img/w/${datosApi.weather[0].icon}.png`}
                            alt={datosApi.weather[0].icon}
                        ></img>
                        <h4> Temperatura actual: {datosApi.main.temp}°C</h4>
                        <p className="infoClima__pSensacion--color"> Sensación térmica: {datosApi.main.feels_like}°C</p> 
                        <p> Temp mínima: {datosApi.main.temp_min}°C</p>
                        <p> Temp máxima: {datosApi.main.temp_max}°C</p>
                    </div>
                ) : (
                <h2>Cargando ...</h2>
                )}
            </div>
        );
}

import React from 'react';
import './App.css';

import axios from 'axios'

import SearchBar from './Componentes/SearchBar';
import ImageCard from './Componentes/ImageCard';

class App extends React.Component
{

  state ={
    results:[] //Aqui guardamos los resultados y lo inicializamos vacio
  }

  search = async (searchWord) =>{
    const apiKey = "L0smv6WBys85x4LVos8HiIHWVzS9Ymir";

    // PROMESA
    
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchWord}`)
    .then( ( response )=>{
      console.log(response.data);
      console.log(response.data.data); // El 1er data es de axios, el 2do es de la API 

      if(response.data.meta.status === 200)
        this.setState({results:response.data.data})
    })
    .catch( (err)=> console.log(err) )
    

    // ASYNC - AWAIT : bloquea el flujo de la app hasta que axios termina la peticion, conviene trabajar con la promesa
    /*const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchWord}`);
    console.log(response);

    if(response.data.meta.status === 200)
        this.setState({results:response.data.data})*/
  }

  render()
  {
    return (
      <div className="App">
        <SearchBar emitSearch={ this.search }/> 
        {
          this.state.results.map((item,index) => <ImageCard key={index} url={item.images.fixed_height.url}/> )
        }
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import ImageCard from './Components/ImageCard';

class App extends React.Component{
  state = {
    results : [ ]
  }

  search = (searchWord) => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchWord}`)
    .then( (response)=>{
      console.log(response.data);
      this.setState({results:response.data})
    })
    .catch(console.log("Error"))
  }

  render(){
    return(
      <div className="App">
        <h1>Consulta TV shows</h1>
        <SearchBar emitSearch={this.search}/> 
        {
          this.state.results.map((item, index) => {
            return item.show.image ? (
              <ImageCard key={index} url={item.show.image.medium}/> )
              : (<p>No hay imagen</p>);
          }
          //<ImageCard key={index} url={item.show.image.medium}/> )
          //console.log(this.state.results)
          )}
      </div>
    );
  } 
}

export default App;

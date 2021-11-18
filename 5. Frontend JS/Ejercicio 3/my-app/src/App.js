import logo from './logo.svg';
import './App.css';
import Counter from "./Counter" // hace referencia al archivo JS

function App() {
  return (
    <div className="App">   { /* className sustituye class en html  */  }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Importa el logo y coloca el valor en src  */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter initCount={ 0 }/> { /* Counter es un componente, initCount: es un parametro  */ }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
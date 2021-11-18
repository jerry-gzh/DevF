import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import HomeLista from "./components/HomeLista";

function App() {
  return (
    <div className= "App">
      <Counter apellido="Guzmán" edad={29} /> {/*Dentro de la etiqueta se mandan los props */}
      <HomeLista />
      </div>
  );
}
export default App;

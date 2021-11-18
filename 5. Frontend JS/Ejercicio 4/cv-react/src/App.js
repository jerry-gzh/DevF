import React from 'react';
import './App.css';

import Header from './Components/Header';
import Foto from './Components/Foto';
import AcercaDeMi from './Components/AcercaDeMi';
import Formulario from './Components/Formulario';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Foto srcFoto="https://cdn-icons-png.flaticon.com/512/53/53133.png" bgColor="#FFF" />
        <AcercaDeMi curiosidades={ [ "Web Developer", "Amante del cafe", "FullStack", "House stark", "Fan de los videojuegos", "HONDA" ] } />
        <Formulario/>
      </main>
    </div>
  );
}

export default App;

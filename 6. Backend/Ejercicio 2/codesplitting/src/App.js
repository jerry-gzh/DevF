import React, {useState, lazy, Suspense} from 'react';
import './App.css';
//import RiverInformation from './components/RiverInformation';
const RiverInformation = lazy(() =>import (/*webpackChunkName: "RiverInformation"*/'./components/RiverInformation'));

function App() {
  const[river, setRiver] = useState('nile')
   return (
    <div className="App">
      <h1>World's longest rivers</h1>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yagntze</button>
      <button onClick={() => setRiver('misssissippi')}>Missisippi</button>
      <Suspense fallback={<div>Loading Component...</div>}>
        <RiverInformation name={river} />
      </Suspense>
    </div>
  );
}

export default App;

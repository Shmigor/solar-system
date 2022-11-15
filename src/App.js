import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import data from './data.json';
import { useState } from 'react';

function App() {

const [planets, setPlanets] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage 
        planets={planets}
        setPlanets={setPlanets}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

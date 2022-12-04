import React from 'react';
import './App.css';
import Welcome from './Component/Welcome';
import Greet from './Component/Greet';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;

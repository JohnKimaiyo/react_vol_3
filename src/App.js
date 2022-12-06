import React from 'react';
import './App.css';
import Welcome from './Component/Welcome';
import Greet from './Component/Greet';
import Hello from './Component/Hello';
function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;

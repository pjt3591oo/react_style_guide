import React from 'react';
import logo from './logo.svg';
import NumberInput from './NumberInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <NumberInput value="1" />
      <NumberInput value="01" />
      <NumberInput value="01.1" />
      <NumberInput value="01" />
      <NumberInput value="0.1" />
      <NumberInput value="" />
    </div>
  );
}

export default App;

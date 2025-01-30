import './App.css';

import Iterador from './iterador.js';
import Sumar from './sumar.js';

import React, { useRef, useState } from 'react';

function App() {
  // const [numero, setNumero] = useState();
  // const [numero, setNumero] = useState();

  const modificar1 = (e) => {
    setNum1 = e.target.value;
  }

  const modificar2 = (e) => {
    setNum1 = e.target.value;
  }

  const sumar = () => {
  }

  return (
    <>
      <Iterador />
      <select value={numero} onChange={seleccionar}>
        <option value="cero">0</option>
        <option value="uno">1</option>
        <option value="dos">2</option>
        <option value="tres">3</option>
      </select>
      <Sumar />
      <p>La opción seleccionada es {numero}</p>
      -------------------------------
      <div className="maquina">
        <h1> Maquina Sumadora</h1>
        <input value={num1} onChange={modificar}></input>
        <input value={num2} onChange={modificar}></input>
        <input value={res} readOnly />
      </div>
    </>
  );
}

export default App;
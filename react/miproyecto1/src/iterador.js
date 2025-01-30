import './iterador.css';

import React, { useRef, useState } from 'react';

function Iterador() {
  const miDiv = useRef();
  const [valorReinicio, setValorReinicio] = useState("33");

  const iterar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  }
  const iniciar = () => {
    miDiv.current.innerHTML = "1";
  }

  const cambiar = (e) => {
    miDiv.current.innerHTML = e.target.value;  
  }

  return (
    <>
      <div ref={miDiv} onClick={iterar}>1</div>
      <button onClick={iniciar}>Reiniciar</button>
      <input value={valorReinicio} onChange={cambiar} type="number" />
    </>
  );
}

export default Iterador;
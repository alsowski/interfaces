import './sumar.css';

import React, { useRef, useState } from 'react';

function Sumar() {
    const miDiv = useRef();
    const [valorReinicio, setValorReinicio] = useState("33");

    const valor1 = (e) => {
        e.target.innerHTML = Number(e.target.innerHTML);
    }

    const valor2 = (e) => {
        e.target.innerHTML = Number(e.target.innerHTML);
    }

    const resultado = (e) => {
        e.target.innerHTML = Number(e.target.innerHTML);
    }

    const sumar = () => {
        resultado = valor1 + valor2;
    }

    return (
        <>
            <input value={valor1} type="number" />
            <input value={valor2} type="number" />
            <input value={resultado} type="number" />
            <button onClick={sumar}>Sumar</button>
        </>
    );
}

export default Sumar;
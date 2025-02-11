import React, { useState } from 'react';

export default function Formulario() {

    const comprobar =()=>{
        {comparar()};
    }

    const [num,setNum] = useState();

    return (
        <div class="guess-section">
            <input onchange="cambiar" type="number" id="guess" placeholder="Número" min="1" max="20" />
            <button onclick="checkGuess()">Check!</button>
        </div>
    )
}
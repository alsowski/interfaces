import React from 'react';
import Mensaje from './Mensaje';
import LineaPuntuacion from './LineaPuntuacion';

export default function Puntuacion(props) {
    return (
        <div class="score-section">
            <br/>
            <Mensaje mensaje={props.mensaje}/>
            <br/>
            <LineaPuntuacion etiqueta="Puntuación:" id="score" numero={props.puntuacion}/>
            <LineaPuntuacion etiqueta="Puntuaje Alto:" id="highscore" numero={props.score}/>
        </div>
    )
}
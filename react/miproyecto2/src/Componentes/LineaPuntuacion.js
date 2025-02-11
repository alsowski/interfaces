import React from 'react';
import Puntuacion from './Puntuacion';

export default function LineaPuntuacion({etiqueta, id, numero}) {
    return (
      <>
          <p>{etiqueta} <span id={id}>{numero}</span></p>
      </>
    )
  
}

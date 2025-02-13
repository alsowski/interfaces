import React from "react";
import Boton from "./Boton";
import './estilos.css';

export default function Famosos({SetearFamoso, nombre,apellido,color,precio}) {
    const desaparecer = (e) => {
        SetearFamoso(nombre,apellido,precio)
        e.target.parentNode.style.display="none";
    }
    return (
        <div className="famoso" style={{backgroundColor:color}}>
            {nombre} {apellido}<br/>
            <Boton onClick={desaparecer} />
        </div>
    )
}
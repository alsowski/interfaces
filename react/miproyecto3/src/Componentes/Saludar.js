import React from 'react'

export default function Saludar({ setMostrarMensaje, comparar }) {
    const mostrar = () => {
        comparar();
        setMostrarMensaje(true);
    }
    return (
        <>
            <button onClick={mostrar}>Saludar</button>
        </>
    )
}
<<<<<<< HEAD
=======

>>>>>>> 36d6ad8b9e6817ac247bb7fcaf66bc57d31c0d31

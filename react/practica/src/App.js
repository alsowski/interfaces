import React, { useState } from "react";
import Mensaje from "./Componentes/Mensaje";
import Famosos from "./Componentes/Famosos";
import './Componentes/estilos.css';

function App() {

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  const famosos = [
    {
      nombre: "Pablo",
      apellido: "Alboran",
      color: "red",
      precio: 100
    },
    {
      nombre: "Aitana",
      apellido: "",
      color: "purple",
      precio: 120
    },
    {
      nombre: "Abraham",
      apellido: "Mateo",
      color: "blue",
      precio: 140
    },
    {
      nombre: "Ana",
      apellido: "Mena",
      color: "violet",
      precio: 150
    },
    {
      nombre: "Manuel",
      apellido: "Carrasco",
      color: "green",
      precio: 125
    },
    {
      nombre: "Rosalia",
      apellido: "",
      color: "orange",
      precio: 180
    }
  ]

  const SetearFamoso = (nombreFamoso, apellidoFamoso, precioFamoso) => {
    if (nombre=="") {
      setNombre(nombreFamoso + " " + apellidoFamoso);
    } 

    if (!(nombre=="")) {
      setNombre(nombreFamoso+" "+apellidoFamoso+", "+nombre);
    }

    setPrecio(precioFamoso + precio);
  }

  return (
    <>
      <Mensaje nombre={nombre} precio={precio} />
      <Famosos nombre={famosos[0].nombre} apellido={famosos[0].apellido} color={famosos[0].color} precio={famosos[0].precio} SetearFamoso={SetearFamoso}/>
      <Famosos nombre={famosos[1].nombre} apellido={famosos[1].apellido} color={famosos[1].color} precio={famosos[1].precio} SetearFamoso={SetearFamoso}/>
      <Famosos nombre={famosos[2].nombre} apellido={famosos[2].apellido} color={famosos[2].color} precio={famosos[2].precio} SetearFamoso={SetearFamoso}/>
      <Famosos nombre={famosos[3].nombre} apellido={famosos[3].apellido} color={famosos[3].color} precio={famosos[3].precio} SetearFamoso={SetearFamoso}/>
      <Famosos nombre={famosos[4].nombre} apellido={famosos[4].apellido} color={famosos[4].color} precio={famosos[4].precio} SetearFamoso={SetearFamoso}/>
      <Famosos nombre={famosos[5].nombre} apellido={famosos[5].apellido} color={famosos[5].color} precio={famosos[5].precio} SetearFamoso={SetearFamoso}/>
    </>
  );
}

export default App;

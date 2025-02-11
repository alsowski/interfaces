import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// 1️⃣ Componente arrastrable
const DraggableBox = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BOX', // Tipo del elemento
    item: { id: 1 }, // Datos opcionales que viajan con el arrastre
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // Saber si se está arrastrando
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'skyblue',
        opacity: isDragging ? 0.5 : 1, // Efecto de transparencia al arrastrar
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      }}
    >
      Arrástrame
    </div>
  );
};

// 2️⃣ Zona para soltar el elemento
const DropZone = () => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'BOX', // Solo acepta elementos del tipo 'BOX'
    drop: (item) => alert(`¡Has soltado el cuadro con ID: ${item.id}!`),
    collect: (monitor) => ({
      isOver: monitor.isOver(), // Saber si hay un elemento encima
      canDrop: monitor.canDrop(), // Saber si el elemento es aceptado
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '150px',
        width: '150px',
        backgroundColor: isOver ? 'lightgreen' : canDrop ? 'lightyellow' : 'lightgray',
        border: '2px dashed gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease',
      }}
    >
      Suelta aquí
    </div>
  );
};

// 3️⃣ App principal
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <DraggableBox />
        <DropZone />
      </div>
    </DndProvider>
  );
};

export default App;






















// import './App.css';

// import Iterador from './iterador.js';
// import Sumar from './sumar.js';

// import React, { useRef, useState } from 'react';

// function App() {
//   // const [numero, setNumero] = useState();
//   // const [numero, setNumero] = useState();

//   const modificar1 = (e) => {
//     setNum1 = e.target.value;
//   }

//   const modificar2 = (e) => {
//     setNum1 = e.target.value;
//   }

//   const sumar = () => {
//   }

//   return (
//     <>
//       <Iterador />
//       <select value={numero} onChange={seleccionar}>
//         <option value="cero">0</option>
//         <option value="uno">1</option>
//         <option value="dos">2</option>
//         <option value="tres">3</option>
//       </select>
//       <Sumar />
//       <p>La opción seleccionada es {numero}</p>
//       -------------------------------
//       <div className="maquina">
//         <h1> Maquina Sumadora</h1>
//         <input value={num1} onChange={modificar}></input>
//         <input value={num2} onChange={modificar}></input>
//         <input value={res} readOnly />
//       </div>
//     </>
//   );
// }

// export default App;
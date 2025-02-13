import './App.css';
import Reiniciar from './Componentes/Reiniciar';
import NumeroSecreto from './Componentes/NumeroSecreto';
import Formulario from './Componentes/Formulario';
import Puntuacion from './Componentes/Puntuacion';
import { useState } from 'react';

function App() {

  const generarNumSecreto=()=>{
    return Math.trunc(Math.random()*20)+1;
  }

  const reiniciar =()=>{
    setNumSecreto(generarNumSecreto);
    setMensaje("Empiece adivinar...");
    setPuntuacion(20);
    document.body.style.backgroundColor="";
  }

  const comparar =(numero)=>{
    if (!numero){
      setMensaje("Pon un número");
    } else if (Number(numero)== numSecreto){
      setMensaje("Ganaste");
      document.body.style.backgroundColor="green";
      if (score<puntuacion){
        setScore(puntuacion);
      }

      if (score>puntuacion) {
        setScore(puntuacion);
      }

    } else if (Number(numero)< numSecreto) {
      setMensaje ("Tu número es bajo");
      setPuntuacion (puntuacion-1);
    }
    else {
      setMensaje("Tu número es alto");
      setPuntuacion (puntuacion-1);
    }
    
    if (puntuacion==0) {
      setMensaje ("Perdiste. Reiniciar para volver a intentar");
      document.body.style.backgroundColor="red";
      setPuntuacion (0);
      }
  }

  const [numSecreto, setNumSecreto] = useState(generarNumSecreto);
  const [mensaje, setMensaje]= useState("Empiece adivinar...");
  const [puntuacion, setPuntuacion]= useState(20);
  const [score, setScore]= useState(0);

  return (
    <div className="container">
      <Reiniciar reiniciar={reiniciar}/>
      <h1>¡Adivina mi número! {numSecreto}</h1>
      <NumeroSecreto/>
      <br />
      <Formulario comparar={comparar}/>
      <Puntuacion mensaje={mensaje} puntuacion={puntuacion} score={score}/>
    </div>
  );
}

export default App
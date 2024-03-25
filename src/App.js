import React, { useState, useEffect } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Definir el state
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ balance, setBalance ] = useState(0);
  const [ mostrar_pregunta, setMPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [ gasto, setGasto ] = useState({});
  const [ crear_gasto, setCrearGasto ] = useState(false);

  // UseEffect que actualiza el restante

  useEffect(() => {
    // setGastos([...gastos, gasto])
    if(crear_gasto)
    {
      setGastos([...gastos, gasto])
      const presupuestoRestante = balance - gasto.cantidad;
      setBalance(presupuestoRestante);

      setCrearGasto(false);
    }
  }, [gasto, crear_gasto, gastos, balance]);

  /*const agregarGasto = gasto => {
    setGastos([...gastos, gasto])
  }*/

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
        { mostrar_pregunta ?
          (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setBalance={setBalance}
              setMPregunta={setMPregunta}
            />
          ) : 
          (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  addGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  balance={balance}
                />
              </div>
            </div>
          )
          }
        </div>
      </header>
    </div>
  );
}

export default App;

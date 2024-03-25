import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ( { setPresupuesto, setBalance, setMPregunta } ) => {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion que lee presupuesto
    const definirPresupuesto = e => {
        // console.log(parseInt(e.target.value));
        setCantidad(parseInt(e.target.value, 10))
    }

    // Funcion submit
    const addPresupuesto = e => {
        e.preventDefault()
        if(cantidad < 1 || isNaN(cantidad))
        {
            setError(true);
            return;
        }
        setError(false);

        setPresupuesto(cantidad);
        setBalance(cantidad);
        setMPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error msg="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={addPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
    setMPregunta: PropTypes.func.isRequired
}
export default Pregunta;
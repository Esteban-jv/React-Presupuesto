import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error';
import shortid from 'shortid'

const Formulario = ( { addGasto, setCrearGasto } ) => {

const [ nombre, setNombre ] = useState("");
const [ cantidad, setCantidad ] = useState(0);
const [ error, setError ] = useState(false);

const agregarGasto = e => {
    e.preventDefault();

    if(cantidad<1 || isNaN(cantidad) || nombre.trim() === "")
    {
        setError(true);
        return;
    }
    setError(false);

    // Construir gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }

    addGasto(gasto);
    setCrearGasto(true);

    // reset form 
    setNombre("");
    setCantidad(0);
}

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error msg="Ambos campos son obligatorios o Presupuesto incorrecto"/> : null }

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 500"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
     );
}
 
Formulario.propTypes = {
    addGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
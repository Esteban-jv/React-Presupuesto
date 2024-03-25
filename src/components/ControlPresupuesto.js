import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers'
import PropTypes from 'prop-types'

const ControlPresupuesto = ( { presupuesto, balance } ) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, balance)}>
                Restante: $ {balance}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;
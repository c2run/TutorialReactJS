import React from 'react';
import PropTypes from 'prop-types';


const SaludoFuncion = (props) => {
    return (
        <div>
                <h1>
                    Hola!!! {props.nombre} desde componente funcional!
                </h1>
                
                
            </div>
    );
};


SaludoFuncion.propTypes = {
    nombre: PropTypes.string
};


export default SaludoFuncion;

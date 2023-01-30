import React, { useState} from 'react';
import PropTypes from 'prop-types';


const SaludoFuncion = (props) => {
    //Para trabajar con estados en funciones se utiliza useState
    //const [variable, método para actualizarlo] = useState(valor inicial)
    const [edad, setedad] = useState(30);

    const cumple = () => {
        //actualizamos el State
        setedad(edad+1)
    }
    return (
        <div>
                <h1>
                    Hola!!! {props.nombre} desde componente funcional!
                </h1>
                <h2>
                    Tu edad es de: {edad}
                </h2>
                <div>
                    <button onClick={cumple}>
                        cumplir años
                    </button>
                </div>
                
            </div>
    );
};


SaludoFuncion.propTypes = {
    nombre: PropTypes.string
};


export default SaludoFuncion;

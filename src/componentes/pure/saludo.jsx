import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Saludo extends Component {

    constructor(props){
            super(props)
            this.state = {
                edad : 30
            }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola!!! {this.props.nombre}
                </h1>
                <h2>
                    Tu edad es de: {this.state.edad}
                </h2>
                <div>
                    <button onClick={this.Cumpleanios}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    
    Cumpleanios = () => {
        this.setState((prevState) => (
            {
                edad: prevState.edad +1
            }
            )
        )
    }
}



Saludo.propTypes = {
    /*Establecer que el tipo de componente proptype sea de tipo texto*/
    nombre: PropTypes.string
};


export default Saludo;


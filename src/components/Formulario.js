import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';



const Formulario = ({ setCategoria }) => {

    const OPCIONES  = [
        {value: 'world', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
        {value: 'nation', label: 'Nación'}
    ];

    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    const buscarNoticia = e => {
        e.preventDefault();

        setCategoria(categoria);
    }

    const { buscador, heading, btn_block } = styles;

    return (
        <div className={`${buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticia}
                >
                    <h2 className={heading}>Encuentra noticia por categoría</h2>

                    <SelectNoticias
                        
                    />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
};

export default Formulario;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// a6828a95958a4da78ad326030fc4e8e1

const useSelect = (stateInicial, opciones) => {

    const [ state, setState ] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                    </option>
            ))}
        </select>
    );

    return [state, SelectNoticias]
};

useSelect.propTypes = {
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.array.isRequired
};

export default useSelect;
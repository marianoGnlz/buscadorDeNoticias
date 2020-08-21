import React from 'react';
import uuid from 'react-uuid'
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListadoNoticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={uuid()} 
                    noticia={noticia}
                />
            ))}
        </div>
    );
};

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
};

export default ListadoNoticias;
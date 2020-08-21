import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [ categoria, setCategoria ] = useState('');
  const [ noticias, setNoticias ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a6828a95958a4da78ad326030fc4e8e1`;
      
      const respuesta = await fetch(URL);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;

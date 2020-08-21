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
      //const URL = `https://gnews.io/api/v3/topics/${categoria}?q=all&lang=es&country=ar&token=8bbf750d67cc171fcbe7b28bb39d5c01`
      
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

/*
* Renderiza un conjunto de imágenes pertenecientes a la categoria que recibe
*/

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  /* Usa un custom hook que llama metodo para cargar imagenes
  *  controla que no se recargue, a no ser que cambie la categoria del componente
  *  en el retorno devuelve las imagenes y booleano para saber si cargó la info
  */
  const {imagenes,loading } = useFetchGifs(category);

    return (
      <>
        <h3 className="limpiar">{category}</h3>
        {loading&&<p>loading...</p>}
        <div className="card-grid">
          {/* por cada imagen de la categoria que esta mostrando, llama a un componente que la renderiza */}
          {imagenes.map(({ id, title, url }) => (
            <GifGridItem key={id} title={title} url={url}></GifGridItem>
          ))}
        </div>
      </>
    );
}

export default GifGrid

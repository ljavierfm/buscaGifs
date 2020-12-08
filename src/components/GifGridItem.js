/*
* Renderiza una imagen y sus propiedades, al recibir estos desde el componente padre
*/

import React from 'react'

const GifGridItem = ({ id, title, url }) => {
  return (
    <div key={id} className="card tarjeta animate__animated animate__fadeIn">
      <img src={url} className="card-img-top" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}

export default GifGridItem;

/*
* Este componente renderiza un formulario donde se añaden categorias al listado
* recibe el setCategories del componente padre para actualizarle las categorias al mismo
*/

import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  //propiedad que recoge el valor del input donde se añade la categoria
  const [inputValue, setInputValue] = useState('');

  //se llama cuando se dispara el evento onChange del input
  const handleInputValueChange = (e) => {
    //cambiar el valor de la propiedad inputValue con el valor del input
    setInputValue(e.target.value);
  };

  //controla el envio del formulario, no hay botón de envío. Es al teclear la enter
  const handleSubmit = (e) => {
    //cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento
    e.preventDefault();

    //evitamos que se manden categorias vacias o sin sentido controlando la longitud de la cadena del input
    if (inputValue.trim().length > 2) {
      /*
      * setCategories puede pasar como parámetro el valor anterior ( array de categorias)
      * al Array se le añade la nueva categoria escrita en el formulario
     */
      console.log('input en el form', inputValue);
      setCategories((categories) => [inputValue, ...categories]);


      //evitamos el doble posteo
      setInputValue('');
    }
  };
  return (
    //no es necsario un fragment <> porque el form es un agrupador de etiquetas también
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        onChange={handleInputValueChange}
        className="form-control-sm busqueda"
      ></input>
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-primary mb-2"
      >
        Añadir
      </button>
    </form>
  );
};

/* obligamos a que nos pasen las categorias siempre que se use este componente*/
AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired
};

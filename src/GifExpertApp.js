import React, { useState } from "react";


import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Ducks']);

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* se renderiza componente con formulario para añadir categorias */}
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      {/* Por cada categoria va a renderizar un componente que agrupa un listado de imagenes de la categoria */}
      {console.log('categorias almacenadas',categories)}
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
    </>
  );
};
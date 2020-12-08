/*
* Dada una categoria obtiene desde giphy un Array de imágenes
*/

export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=JKvhJOHo1ipcjStQhiUfzlCiWuODlCuC`;
  const respuesta = await fetch(url);

  //desestructuramos para solo obtener el array de imagenes
  const { data: imgObjects } = await respuesta.json();

  //se mapea para crear un array con objetos imagen, sacando el id y la url
  const gifs = imgObjects.map((imgObject) => {
    return {
      id: imgObject.id,
      title: imgObject.title,
      url: imgObject.images?.downsized_medium.url,
    };
  });

    return gifs;
};

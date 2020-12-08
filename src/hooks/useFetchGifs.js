/*
*
* No se importa React porque no usamos JSX
*/
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    imagenes: [],
    loading: true,
  });

  //los efectos no pueden ser async
  useEffect(() => {
    getGifs(category).then((imgs) =>
      setState({
        imagenes: imgs,
        loading: false,
      })
    );
  }, [category]);

  return state; //imagenes:[], loading:true
}
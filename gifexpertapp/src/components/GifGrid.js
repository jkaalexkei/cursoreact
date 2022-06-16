import React from 'react'

export const GifGrid = ({categorias}) => {

    const getGifs = async ()=>{

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=1vdyoNGMO7BetORSFBFr4JXF1qFi6Zri';

        const respuesta = await fetch(url);

        const {data} = await respuesta.json();
        // console.log(data);
        const gifs = data.map(img => {
            return {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url

            }
        });

        console.log(gifs);
    }

    getGifs();

  return (
    <div>
            <h3>{categorias}</h3>

    </div>
  )
}

export default GifGrid

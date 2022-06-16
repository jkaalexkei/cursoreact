import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import ReactDOM from 'react-dom';

// import './index.css';


const GifExpertApp = () => {

    //el useState siempre se debe declarar dentro de la inicializacion del componente es decir dentro de la declaracion de la linea 7 de este codigo
    const [categorias, setCategorias] = useState(['One Punch']);//esto es un hook

   


    return (
        <>
            <h2>GifExpertApp</h2>
            {<AddCategory setCategorias={ setCategorias } />}
            <hr/>
            <ol>
                {
                    //usamos el metodo map para recorrer los elementos del array
                    categorias.map( category => {
                        return <GifGrid key = {category} categorias = {category} />
                        // return <li key={category}>{category} </li> esto retorna las lista de categorias
                    })
                }
            </ol>
            {/* <button onClick={agregar}>Agregar Comics</button> */}
        </>
    );
}

export default GifExpertApp;






//-------------SOLO PARA REFERENCIA ------------------------------------------------------------------
    //cuando se usa el setCategoria para agregar un valor se reemplaza el estado actual y crea un nuevo estado
  //  const agregar = () => {
        //SOLUCION 1
        // setCategorias(['HunterXHunter',...categorias]);
        //en esta solucion se hace una copia de los elementos del array y luego se agrega el elemento que se quiere agregar

        //-----------------------------------------------------------------------------------
        
        //SOLUCION 2
  //      setCategorias( cats => [...cats,'HunterXHunter']);
        //en esta solucion dentro de los argumentos de setCategorias se crea una funcion que procesa el array donde la funcion recibe como argumento los elementos del array y se retorna un nuevo array con la copia del array anterior mas el nuevo elemento
  //  }

  //----------------------------------------------------------------------------------------------
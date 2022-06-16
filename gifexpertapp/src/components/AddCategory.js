import React, { useState } from 'react'

import PropTypes from 'prop-types'


const AddCategory = ( { setCategorias } ) => {
// setCategorias esta propiedad se pasa como arg para poder comunicar con el componente GisExpertApp
//se debe hacer por desestructuracion
  const [inputValue, setinputValue] = useState('');

  //PROCEDIMIENTO PARA PODER QUE SE PUEDA ESCRIBIR EN EL INPUT
  //Se debe crear una funcion que capture el evento al momento de ingresar texto en el input. Dicho evento se le envia como arg a  la funcion
  // a la funcion setInputValue se le debe pasar por argumento el evento.
  //de la siguiente manera
  //el inputValue contiene el ultimo valor ingresado en el input


  const capturarEventoInput = (e)=>{
    //aca utilizamos el setInputValue y se le pasa el evento con la finalidad de capturar el valor ingresado en el input (ultimo valor ingresado)
    setinputValue(e.target.value);//setInputValue se utiliza para pasarle valores al input
  }

  const handleSubmit = (e)=>{
    e.preventDefault();//previene el comportamiento por defecto delformulario
    if(inputValue===""){
      alert('el campo de texto esta vacio');
    }else{
      setCategorias(cats => [...cats, inputValue]);//esta funcion setCategorias es un callback que recibe un parametro que contiene el estado anterior en este caso de las categorias
    }
    //otra forma de validacion
    /**
     
    if(inputValue.trim().length > 2){
      setCategorias(cats => [...cats, inputValue]);
      setInputValue('');//esto asi cadena vacia al input
    }

     */
    
  }

  //en el caso de tener un elemento que agrupe otros elementos como una etiqueta form o un div no es necesario del uso del fragment <> </>
  return (
    
      <form onSubmit={handleSubmit}>
        <h2>{inputValue}</h2>
        <input type="text" placeholder="ingresa un texto" value={inputValue} onChange={capturarEventoInput}/>
      </form>
      
    
  )
};



export default AddCategory

AddCategory.propType = {
  setCategorias:PropTypes.func.isRequired,
}
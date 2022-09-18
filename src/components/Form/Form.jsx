import React, { useState } from 'react';

import './Form.css';


function Form(){

  const [variablesApi, setVariablesApi] = useState({
    longitud:'',
    latitud:''
  })

  const handleInputChange = (event)=>{
    setVariablesApi(prevVairablesApi=>({...prevVairablesApi, [event.target.name] : event.target.value}))
  }


  return(
    <div id='formulario'>
      {/* {variablesApi.latitud} */}
      {/* {variablesApi.longitud} */}
      <form action="" >
        <div className="inputs">
          <label htmlFor="">Latitud</label>
          <input type="text" name='latitud' onChange={handleInputChange} />
        </div>
        <div className="inputs">
          <label htmlFor="">Longitud</label>
          <input type="text" name='longitud' onChange={handleInputChange} />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
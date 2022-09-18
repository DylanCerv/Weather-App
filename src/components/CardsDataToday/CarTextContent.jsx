import React from 'react';

import "./CardContent.css"

function CardTextContent(props){

  const cutValueConverted = (valor)=>{
    const strValor = `${props.value}` 
    const indiceValor = strValor.indexOf('.');
    const valorSubst = strValor.substring(0, indiceValor+3);

    return <>{valorSubst}</>
  }



  return(
    <div className="CardContent Text">
      <div className="Title">{props.title}</div>
      <div className="content">
        <div className="data-content">

          <span>
            {props.title == 'Visibility' ? cutValueConverted(props.value) : props.value}
          </span>
          {props.unidadMedida}
        </div>
      </div>
    </div>
  );
}

export default CardTextContent;
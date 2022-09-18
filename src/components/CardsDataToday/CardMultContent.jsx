import React, { useEffect, useState } from 'react';


import "./CardContent.css"

function CardMultContent(props){

  const [style, setStyle] = useState({});
	

  
	setTimeout(()=>{
		const newStyleProgressBar = {
			opacity: 1,
			width: `${props.progressBar}%`
		}
		
		setStyle(newStyleProgressBar);
	}, 70);

  return(
    <div className="CardContent Mult">
      <div className="Title">{props.title}</div>
      <div className="content">
        <div className="data-content">
          <span>{props.value}</span>{props.unidadMedida}
        </div>
        <div className="icon-content">
            {!props.progressBar ? '' : 
              <div className='progressBar container-dentro-iconImg'>
                <div className="progress" style={style}>{props.progressBar}%</div>
              </div>
            }
        </div>
      </div>
    </div>
  );
}

export default CardMultContent;
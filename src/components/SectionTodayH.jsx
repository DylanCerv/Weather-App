import React, { useEffect, useState } from 'react';
import CardMultContent from './CardsDataToday/CardMultContent';
import CardTextContent from './CardsDataToday/CarTextContent';

import "./SectionTodayH.css";

import TodayH from './Titles/TodayH.jsx';


function SectionTodayH(props){

  const [apiToday, setApiToday] = useState(null);



  useEffect(()=>{
    setApiToday(props.api_today);

  },[])



  return(
    <div id="SectionTodayH">
      <TodayH />
      <div className="content">
        {apiToday == null ? 'Cargando...' : <>
        <CardMultContent 
          title = 'Wind Speed'
          value = {apiToday.wind.speed}
          unidadMedida = 'm/s'
        />
        <CardMultContent 
          title = 'Humidity'
          value = {apiToday.main.humidity}
          progressBar = {apiToday.main.humidity}
          unidadMedida = '%'
        />
        <CardTextContent 
          title = 'Visibility'
          value = {apiToday.visibility * 0.000621371} // la visibilidad en metro y se pasa a millas (para pasarlos a millas se multiplica por 0.000621371)
          unidadMedida = 'miles'
        />
        <CardTextContent 
          title= 'Air Pressure'
          value = {apiToday.main.pressure}
          unidadMedida = 'Pa'
        />
        </>}
      </div>
    </div>
  );
}

export default SectionTodayH;
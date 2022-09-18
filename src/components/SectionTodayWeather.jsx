import React, { useEffect, useState } from 'react';
import From from './Form/Form';

import "./SectionTodayWeather.css";

import Form from "./Form/Form.jsx"



function SectionTodayWeather(props){

  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const [apiToday, setApiToday] = useState(null);
  const [formV, setFormV] = useState(false);


  const temperature = ()=>{
    const temp = `${apiToday.main.temp - 273.15}`
    const indiceTemp = temp.indexOf('.')
    const tempSubst = temp.substring(0, indiceTemp+3)
    return <>{tempSubst}</>
  }
  const imgWeatherToday = ()=>{
    if(apiToday.weather[0].description == 'light rain'){
      return <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1663464502/rain_w2sweg.svg" alt="" />
    }else if(apiToday.weather[0].description == 'scattered clouds'){
      return <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1663464502/clear_yfoiyq.svg" alt="" />
    }else if(apiToday.weather[0].description == 'overcast clouds' ||
              apiToday.weather[0].description == 'broken clouds'){
      return <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1663464502/cloud_s71ggt.svg" alt="" />

    }else if (apiToday.weather[0].description == 'light snow'){
      return <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1663464503/snow_unhrhm.svg" alt="" />
    }else {
      return <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1663464502/haze_wt7yv1.svg" alt="" />
    }

    // if(apiToday.weather[0].description == 'light rain'){
    //   return <img src="https://static.toiimg.com/thumb/msid-88745723,width-400,resizemode-4/88745723.jpg" alt="" />
    // }else if(apiToday.weather[0].description == 'scattered clouds'){
    //   return <img src="https://media.istockphoto.com/photos/cirrocumulus-clouds-cloudscape-picture-id645173476?b=1&k=20&m=645173476&s=170667a&w=0&h=0wdytj1LA3mA1Jzp0j6_rgip60BxH9e5BAAE_vFlJQE=" alt="" />
    // }else if(apiToday.weather[0].description == 'overcast clouds'){
    //   return <img src="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg" alt="" />
    // }else if(apiToday.weather[0].description == 'broken clouds'){
    //   return <img src="https://i.pinimg.com/736x/e9/48/9c/e9489cabae5ef3546f3e3f80e79f72f2.jpg" alt="" />
    // }else {
    //   return <img src="https://i0.wp.com/wikisabio.com/wp-content/uploads/2020/10/concepto-climas-lifeder-min.jpg?fit=900%2C471&ssl=1" alt="" />
    // }
  }
  const timeStamp = ()=>{
    const TimeStamp = new Date(apiToday.dt * 1000);
    const numberdayWeek = TimeStamp.getDay();
    const numberDay = TimeStamp.getDate();
    const numbermonth = TimeStamp.getMonth();
    // Obtener los nombres completos
    const dayWeekFull = nameDays[numberdayWeek];
    const monthFull = months[numbermonth];
    // Extraer las 3 primeras letras del nombre
    const monthCut_3_letter = monthFull.substring(0, 3);
    const dayWeekCut_3_letter = dayWeekFull.substring(0, 3);

    const dateFull = `${dayWeekCut_3_letter}. ${numberDay} ${monthCut_3_letter}`;
    return <>{dateFull}</>
  }


  useEffect(()=>{
    setApiToday(props.api_today);


    // console.log(props.api_today);
  },[])
  


  return(
    <>
      <div className="up">
        <button onClick={()=>setFormV(true)}>Search for places</button>
        {formV ? <div className='validacionFormulario'> <span onClick={()=>setFormV(false)}>X</span> <Form /> </div> : ''}
      </div>
      <div className="center">{apiToday == null ? 'Cargando...' : imgWeatherToday()}</div>
      <div className="down">
        <div className="grades-today"><span>{apiToday == null ? '...' : temperature()}</span>°C</div>
        <div className="clima">{apiToday == null ? 'Cargando...' : apiToday.weather[0].main}</div>
        <div className="date-place">
          <p className="date">Today - {apiToday == null ? '...' : timeStamp()}</p>
          <p className="place">
            <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1663464514/place_mfu2cf.svg" alt="" />
            {apiToday == null ? 'Cargando...' : apiToday.sys.country} - {apiToday == null ? 'Cargando...' : apiToday.name}</p>
        </div>
      </div>
    </>
  );
}

export default SectionTodayWeather;
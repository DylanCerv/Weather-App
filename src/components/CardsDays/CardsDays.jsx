import React, { useEffect, useState } from 'react';
import "./CardsDays.css";

function CardsDays(props){

  const nameDaysEn = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const numberDay = new Date(props.day).getDay();
  const nameDay = nameDaysEn[numberDay];

  // Grados UP
    const UP = `${props.gradeUP - 273.15}`;
    const indiceGradeUp = UP.indexOf('.');
    const gradeSubstUP = UP.substring(0, indiceGradeUp+3);
  // Grados DOWN
    const DOWN = `${props.gradeDOWN - 273.15}`;
    const indiceGradeDown = DOWN.indexOf('.');
    const gradeSubstDOWN = DOWN.substring(0, indiceGradeDown+3);
  // Day
    const Day = props.day
    const daySubst = Day.substring(8, 10)
    

  const imgWeather = ()=>{
    if(props.weather == 'light rain'){
      return <img src="public/img/Weather Icons/rain.svg" alt="" />
      
    }else if(props.weather == 'clear sky' || 
              props.weather == 'few clouds' || 
              props.weather == 'scattered clouds'){
      return <img src="public/img/Weather Icons/clear.svg" alt="" />

    }else if(props.weather == 'overcast clouds' || 
              props.weather == 'broken clouds'){
      return <img src="public/img/Weather Icons/cloud.svg" alt="" />

    }else if (props.weather == 'light snow'){
      return <img src="public/img/Weather Icons/snow.svg" alt="" />

    }
    else {
      return <img src="public/img/Weather Icons/haze.svg" alt="" />
    }
    // if(props.weather == 'light rain'){
    //   return <img src="https://static.toiimg.com/thumb/msid-88745723,width-400,resizemode-4/88745723.jpg" alt="" />
    // }else if(props.weather == 'scattered clouds'){
    //   return <img src="https://media.istockphoto.com/photos/cirrocumulus-clouds-cloudscape-picture-id645173476?b=1&k=20&m=645173476&s=170667a&w=0&h=0wdytj1LA3mA1Jzp0j6_rgip60BxH9e5BAAE_vFlJQE=" alt="" />
    // }else if(props.weather == 'overcast clouds'){
    //   return <img src="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg" alt="" />
    // }else if (props.weather == 'broken clouds'){
    //   return <img src="https://i.pinimg.com/736x/e9/48/9c/e9489cabae5ef3546f3e3f80e79f72f2.jpg" alt="" />
    // }else if (props.weather == 'light snow'){
    //   return <img src="https://img5.goodfon.com/wallpaper/nbig/9/3c/les-derevia-sneg-zima-doroga-svet-winter.jpg" alt="" />
    // }
    // else {
    //   return <img src="https://i0.wp.com/wikisabio.com/wp-content/uploads/2020/10/concepto-climas-lifeder-min.jpg?fit=900%2C471&ssl=1" alt="" />
    // }
  }

  return(
    <div id="Card-day" keys={props.keys}>
      <div className="day">{!props.nextDay ? nameDay : props.nextDay}</div>
      <div className="img">{imgWeather()}</div>
      <div className="grades">
        <span className="grade-up">{gradeSubstUP} °C</span>
        <span className="grade-down">{gradeSubstDOWN} °C</span>
      </div>
    </div>
  );
}

export default CardsDays;
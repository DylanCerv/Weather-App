import React, { useEffect, useState } from 'react';

import "./SectionCardsDaysContainer.css";

import CardsDays from './CardsDays/CardsDays.jsx';



function SectionCardsDaysContainer(props){

  const [api5, setApi5] = useState(null);


  const LogApi = (Api5)=>{
    const Day1 = Api5[0]
    const Day2 = Api5[10]
    const Day3 = Api5[19]
    const Day4 = Api5[26]
    const Day5 = Api5[38]
    // console.log(Day1)
    // console.log(Day2)
    // console.log(Day3)
    // console.log(Day4)
    // console.log(Day5)
    return <>
            <CardsDays 
                keys = {1}
                day = {Day1.dt_txt}
                nextDay = 'Tomorrow'
                gradeUP ={Day1.main.temp_max}
                gradeDOWN ={Day1.main.temp_min}
                weather = {Day1.weather[0].description}
            />
            <CardsDays 
                keys = {2}
                day = {Day2.dt_txt}
                gradeUP ={Day2.main.temp_max}
                gradeDOWN ={Day2.main.temp_min}
                weather = {Day2.weather[0].description}
            />
            <CardsDays 
                keys = {2}
                day = {Day3.dt_txt}
                gradeUP ={Day3.main.temp_max}
                gradeDOWN ={Day3.main.temp_min}
                weather = {Day3.weather[0].description}
            />
            <CardsDays 
                keys = {4}
                day = {Day4.dt_txt}
                gradeUP ={Day4.main.temp_max}
                gradeDOWN ={Day4.main.temp_min}
                weather = {Day4.weather[0].description}
            />
            <CardsDays 
                keys = {5}
                day = {Day5.dt_txt}
                gradeUP ={Day5.main.temp_max}
                gradeDOWN ={Day5.main.temp_min}
                weather = {Day5.weather[0].description}
            />
          </>
  }


  useEffect(()=>{
    setApi5(props.api_5);
    
    // console.log(props.api_5);
  },[])

  return(
    <div className="cardDaysContainer">
        {api5 == null ? 'Cargando' :LogApi(api5)}
    </div>
  );
}

export default SectionCardsDaysContainer;
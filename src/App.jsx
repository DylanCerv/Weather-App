import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';


import SectionCardsDaysContainer from './components/SectionCardsDaysContainer.jsx';
import SectionTodayH from './components/SectionTodayH';
import SectionTodayWeather from './components/SectionTodayWeather';



import { backgoundHTML } from './funtions/Background.js';
import { Api_5_Days, Api_Today } from './funtions/APIs.js';
import { api5JSON, apiTodayJSON } from "./TestJson/TestApis.js";


function App() {

  const [api5APP, setApi5APP] = useState(null);
  const [apiTodayAPP, setapiTodayAPP] = useState(null);
  
  useEffect(()=>{
    Api_5_Days(setApi5APP);
    Api_Today(setapiTodayAPP);
    
    /** DATA TEST **/
    // setApi5APP(api5JSON.list);
    // setapiTodayAPP(apiTodayJSON);
    
  },[])

  apiTodayAPP == null ? console.log('En espera de los datos...') : backgoundHTML(apiTodayAPP.weather[0].description)

  return (
    <div className="App">
      {/* {apiTodayAPP== null ? 'cargando' : apiTodayAPP.weather[0].description} */}
      <div className="left-side">
        <div className="cien">
          {apiTodayAPP == null ? 'cargando...' : <SectionTodayWeather api_today = {apiTodayAPP} />}
        </div>
      </div>
      <div className="right-side">
        <div className="cien margin-right">
          {api5APP == null ? 'cargando...' : <SectionCardsDaysContainer api_5 = {api5APP} />}
          {apiTodayAPP == null ? 'cargando...' : <SectionTodayH api_today = {apiTodayAPP} />}
        </div>
      </div>
    </div>
  )
}

export default App

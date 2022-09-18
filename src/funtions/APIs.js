
const key = 'bd43776c480764547393e4366b8b06c5';


// Obtener Datos de la URL
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var latituds = urlParams.get('latitud');
  var longituds = urlParams.get('longitud');
  // console.log(urlParams.get('longitud'))


if (latituds == null ||
    latituds == undefined ||
    longituds == undefined ||
    latituds == '' ||
    longituds == '' ||
    longituds == null){
  var latitud = '19.8967662';
  var longitud = '-155.5827818';
}else{
  var latitud = latituds;
  var longitud = longituds;
}



const Api_5_Days = async(state)=>{

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=${key}`;
  // console.log(url);
  
  const response = await fetch(url);
  const responseJSON = await response.json();
  state(responseJSON.list);
  // console.log(responseJSON.list);
}

const Api_Today = async(state)=>{

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${key}`;
  console.log(url);

  const response = await fetch(url);
  const responseJSON = await response.json();
  state(responseJSON);
  // console.log(responseJSON);
}




export{
  Api_5_Days,
  Api_Today
}


const backgoundHTML = (clima, )=>{
  // console.log('Data lista...')
  // console.log('===========================================')
  const html = document.getElementById('html');

  console.log(clima)

  if (clima == 'light rain'){ //  DIA
    html.style.backgroundImage = 'url(./../../../public/img/light rain.jpg)'
  }else if (clima == 'overcast clouds'){
    html.style.backgroundImage = 'url(./../../../public/img/overcast clouds.jpg)'
  }else if (clima == 'scattered clouds'){
    html.style.backgroundImage = 'url(./../../../public/img/scattered clouds.jpg)'
  }else if (clima == 'few clouds'){
    html.style.backgroundImage = 'url(./../../../public/img/few clouds.jpg)'
  }else if (clima == 'clear sky'){
    html.style.backgroundImage = 'url(./../../../public/img/clear sky.jpg)'
  }else if (clima == ''){ // NOCHE
    html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
  }else if (clima == ''){
    html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1548232979-6c557ee14752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)'
  }else if (clima == ''){
    html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1572162522099-7a0c28d7691b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
  }else if (clima == ''){
    html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)'
  }else {
    html.style.backgroundImage = 'url(./../../../public/img/none.jpg)'
  }

  // if (clima == 'light rain'){ //  DIA
  //   html.style.backgroundImage = 'url(https://img.freepik.com/free-photo/rain-drops-car-glass_1339-5023.jpg?w=996&t=st=1663455760~exp=1663456360~hmac=126cc2c3bb88b898769151a66be5361ff1b9bf1a3a8d73602e0a524f5ea1ed95)'
  // }else if (clima == 'overcast clouds'){
  //   html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1692&q=80)'
  // }else if (clima == 'scattered clouds'){
  //   html.style.backgroundImage = 'url(https://media.istockphoto.com/photos/cirrocumulus-clouds-cloudscape-picture-id645173476?b=1&k=20&m=645173476&s=170667a&w=0&h=0wdytj1LA3mA1Jzp0j6_rgip60BxH9e5BAAE_vFlJQE=)'
  // }else if (clima == 'few clouds'){
  //   html.style.backgroundImage = 'url(https://img.freepik.com/free-photo/beautiful-blue-sky-with-few-clouds-sunset_181624-22353.jpg?w=996&t=st=1663456085~exp=1663456685~hmac=6c3ad6b8b9c902374ec8035014a8bb0594ca9500d901745e7983e754ee77999f)'
  // }else if (clima == 'clear sky'){
  //   html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1583184617435-d0dc4a3857a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80)'
  // }else if (clima == ''){ // NOCHE
  //   html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
  // }else if (clima == ''){
  //   html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1548232979-6c557ee14752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)'
  // }else if (clima == ''){
  //   html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1572162522099-7a0c28d7691b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
  // }else if (clima == ''){
  //   html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)'
  // }else {
  //   html.style.backgroundImage = 'url(https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
  // }

}


export{
  backgoundHTML
}
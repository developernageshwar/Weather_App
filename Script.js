const input_box = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const whether_img =  document.querySelector('.Whether-img');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const location_not_found = document.querySelector('.location_not_found')
const whether_body = document.querySelector('.whether-body')



 async function weather(city){
    

      api_key = 'f9ca593c8c76c001bb286c8cc6709bcd';
      url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      const weather_data = await  fetch(`${url}`).then(response => response.json())
      console.log(weather_data)
      if (weather_data.cod =='404'){
        location_not_found.style.display= "flex"
        whether_body.style.display= "none"

        console.log('error')
        return
      }
      
      location_not_found.style.display= "none"
      whether_body.style.display= "flex"
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    desc.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind.innerHTML = `${weather_data.wind.speed}kM/H`

    switch(weather_data.weather[0].main) {
        case 'Clouds':
            whether_img.src = 'img/cloud.png';
            break;
            case 'Rain':
                whether_img.src = 'img/rain.png'
                break;
                case 'Clear':
                whether_img.src = 'img/clear.png'
                break;
                case 'Mist':
                whether_img.src = 'img/mist.png'
                break;
                case 'Snow':
                whether_img.src = 'img/snow.png'
    }
            


    






}


searchBtn.addEventListener('click',()=>{
    weather(input_box.value)
})
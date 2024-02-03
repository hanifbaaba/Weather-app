document.addEventListener('DOMContentLoaded',function(){
    const weatherButton = document.getElementById('weather-button');
    weatherButton.addEventListener('click', getWeather)

    
})


function getWeather(){
   const apiKey = 'b0fe6f38f9852d3e8b92d2be62796cb9';
    const cityInput = document.getElementById('city-input')
    const weatherInfo = document.getElementById('weather-info')
    
    if(!cityInput.value){
        alert('Please enter a city.')
        return;
    }

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`
 fetch(apiUrl)
.then(response => response.json())
.then(data => {

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML= `<p> Temperature: ${temperature} &#8451;</p><p>Description: ${description}</p>`;
    
})
.catch(error => {
    console.error('Error fetching weather data:',error);
    weatherInfo.innerHTML = 'Error fetching weather data. Please try again'
})
}


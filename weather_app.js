const apiKey = "81709134f45883fd9762945c5a7d1677";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else
    {
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name; 
    // update the city name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    //update the temprature
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    //update the humidity
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";  
    // update the wind speed

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    // console.log(data);

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


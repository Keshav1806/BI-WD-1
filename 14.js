const apiKey = "3be4297a9d0487853f1421d8ebe07c05";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;
const searchBox = document.querySelector(".input input");
const searchBtn = document.querySelector(".input button");
const weatherImg = document.querySelector(".weatherimg");
async function checkWeather(city) {
    const response = await fetch(apiURL + city);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    }
    else {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/hr";
        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherImg.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherImg.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".otherinfo").style.display = "flex";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


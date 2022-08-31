let weather = {
    fetchWeather: function(city){
        fetch
        .then((resp) => resp.json())
        .then((data) => this.displayWeather(data))
    }
    
    displayWeather: function(data){
        const {name} = data;
        const {icon} = data.weather[0];
        const {description} = data.weather[0];
        const {humidity} = data.main;
        const {temp} = data.main;
        const {speed} = data.wind;

        document.querySelector(".weather").innerHTML=`
        <h2 class = "city">${"Weather in " + name}</h2>
        <div class = "temp"> ${temp + "degrees Celsius"}</div>
        <img src = "https://openweathermap.org/img/wn/${icon}.png" alt="" class="icon"/>
        <div class="description">${description}</div>
        <div class="humidity">${"Humidity:" + humidity + "%"}</div>
        <div class="wind">${"Wind Speed:" + speed + "km/h"}</div>
        `
        document.body.style.backgroundImage = 
    },

    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        weather.search();
    }
})

document.querySelector(".search button").addEventListener("click", () => {
    weather.search();
});
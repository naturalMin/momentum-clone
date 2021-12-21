const API_KEY = "a9886e4eae81720fd6f05101e83dc541";

function geoGood(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main} ${Math.round(data.main.temp,2)}℃`;
    });
}

function geoError() {
    alert("Not Found the Weather ㅠ.ㅠ");
}

navigator.geolocation.getCurrentPosition(geoGood, geoError);
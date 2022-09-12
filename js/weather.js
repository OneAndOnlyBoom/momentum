
const API_KEY = "bed0c0f0c7ab8c4cc3753bb19593b5d6";

function geoOk(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
           

    });


}   
function geoError() { 
    alert('no weather');
}



navigator.geolocation.getCurrentPosition(geoOk, geoError);
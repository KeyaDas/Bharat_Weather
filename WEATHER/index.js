var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "4242dbde9becb40cb7293234e9361325";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data.name;
            var description = data.weather[0].description;
            var tempt = data.main.temp;
            var wnd = data.wind.speed;

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(tempt)}°C</span>`;
            descrip.innerHTML = `Sky Condition: <span>${description}</span>`;
            wind.innerHTML = `Wind Speed: <span>${wnd} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});

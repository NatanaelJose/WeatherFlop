const cityValue = document.getElementById("city").value;
const searchBtn = document.getElementById("search");
const Timer = document.getElementById("Time");

const key = "3ea77c9716c322c3d458735702828971";

const time = setInterval(function() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    if (min < 10) min = '0' + min;

    Timer.innerText = `${hr}:${min}`;
    if (hr >= 0 && hr < 12) {
      document.body.style.background = "url('./Assets/backgrounds/flop_morning.png') center / cover no-repeat";
    } else if (hr >= 12 && hr < 18) {
      document.body.style.background = "url('./Assets/backgrounds/flop_afternoon.png') center / cover no-repeat";
    } else {
      document.body.style.background = "url('./Assets/backgrounds/flop_night.png') center / cover no-repeat";
    }
  });

function updateScreen(data) {
    document.getElementById("time-city").innerHTML = "Tempo em " + data.name;
    document.getElementById("temperature").innerHTML = Math.floor(data.main.temp) + " °C";
    document.getElementById("weather-p").innerHTML = data.weather[0].description;
    document.getElementById("umidity").innerHTML = "Umidade: "+ data.main.humidity + "%";

    if(data.weather[0].icon === "01n") {
        document.getElementById("img").src = "./Assets/backgrounds/cloud-slash.svg";
    } else {
        document.getElementById("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
}

async function buscarCidade(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    console.log(data)
    updateScreen(data);
}

searchBtn.addEventListener("click", () => {buscarCidade(document.getElementById("city").value)});
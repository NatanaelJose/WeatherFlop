const cityValue = document.getElementById("city").value;
const searchBtn = document.getElementById("search");

const key = "3ea77c9716c322c3d458735702828971";

function updateScreen(data) {
    document.getElementById("time-city").innerHTML = "Tempo em " + data.name;
    document.getElementById("temperature").innerHTML = Math.floor(data.main.temp) + " °C";
    document.getElementById("weather-p").innerHTML = data.weather[0].description;
    document.getElementById("umidity").innerHTML = "Umidade: "+ data.main.humidity + "%";
    if(data.weather[0].icon != "01n") {
        document.getElementById("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById("img").style.fontSize = none;

    } else {
        document.getElementById("img").src = "./Assets/backgrounds/cloud-slash.svg";
        document.getElementById("img").style.fontSize = 0.7+"em";
    }
}

async function buscarCidade(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    console.log(data)
    updateScreen(data);
}

searchBtn.addEventListener("click", () => {buscarCidade(document.getElementById("city").value)});
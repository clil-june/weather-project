
let now = new Date();
let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
let day = days[now.getDay()];
let hour=now.getHours();
let minute = now.getMinutes();
let h2 = document.querySelector("#current-time");
if (minute < 10){
  h2.innerHTML= (`${day}, ${hour}:0${minute}`);
}
else{
h2.innerHTML= (`${day}, ${hour}:${minute}`);
}

function search (event){
event.preventDefault();
let searchInput =document.querySelector("#search-bar");
	let h1 = document.querySelector("#location");
	h1.innerHTML= searchInput.value ;
  searchCity(searchInput.value);
}
function searchCity(city){
let apiKey = "e75376106dace0797a632d47f62a8825";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
axios.get(`${apiUrl}&appid${apiKey}`).then(showWeather);
}
	let form=document.querySelector("#search-form");
	form.addEventListener("submit", search);

function showWeather(response){
	let temperature = document.querySelector("#temperature");
  let temp=Math.round(response.data.main.temp);
  temperature.innerHTML=(`${temp}°C`)

  let discription=document.querySelector("#dicription");
  let disc = response.data.weather[0].description;
  discription.innerHTML=(`${disc}`);

  let wind=document.querySelector("#wind");
  let windSpeed= Math.round(response.data.wind.speed);
  wind.innerHTML=(`<i class="fas fa-wind"></i> Wind speed: ${windSpeed} km/h`)

  let hume=document.querySelector("#humidity");
  let humidity=Math.round(response.data.main.humidity);
  hume.innerHTML=(`<i class="fas fa-tint"></i> Humidity: ${humidity}%`)
}

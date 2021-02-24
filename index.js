
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
  temp=(response.data.main.temp);
  temperature.innerHTML=Math.round(`${temp}`)

  let discription=document.querySelector("#dicription");
  let disc = response.data.weather[0].description;
  discription.innerHTML=(`${disc}`);

  let wind=document.querySelector("#wind");
  let windSpeed= Math.round(response.data.wind.speed);
  wind.innerHTML=(`<i class="fas fa-wind"></i> Wind speed: ${windSpeed} km/h`)

  let hume=document.querySelector("#humidity");
  let humidity=Math.round(response.data.main.humidity);
  hume.innerHTML=(`<i class="fas fa-tint"></i> Humidity: ${humidity}%`)

  let iconElemant = document.querySelector("#icon");
  let icon= response.data.weather[0].icon;
  iconElemant.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
  
}

function searchLocation (position){
  let apiKey = "e75376106dace0797a632d47f62a8825";
  let lat = position.coords.latitude;
  let lon= position.coords.longitude;
  let locationUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`;
  axios.get(`${locationUrl}&appid${apiKey}`).then(showLocalWeather);
}

function getLocation (){
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function showLocalWeather (response){
  let cityName = document.querySelector("#location");
  let locationName = (response.data.name);
  cityName.innerHTML=(locationName);

  let temperature = document.querySelector("#temperature");
  temp=(response.data.main.temp);
  temperature.innerHTML=Math.round(`${temp}`)

  let discription=document.querySelector("#dicription");
  let disc = response.data.weather[0].description;
  discription.innerHTML=(`${disc}`);

  let wind=document.querySelector("#wind");
  let windSpeed= Math.round(response.data.wind.speed);
  wind.innerHTML=(`<i class="fas fa-wind"></i> Wind speed: ${windSpeed} km/h`)

  let hume=document.querySelector("#humidity");
  let humidity=Math.round(response.data.main.humidity);
  hume.innerHTML=(`<i class="fas fa-tint"></i> Humidity: ${humidity}%`)

  let iconElemant = document.querySelector("#icon");
  let icon= response.data.weather[0].icon;
  iconElemant.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
  
}

let locationButton = document.querySelector("#your-location")
locationButton.addEventListener("click",getLocation);

function displayFahr (event){
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  let fahrTemp= ((temp * 9)/5 +32);
  temperature.innerHTML=Math.round(fahrTemp);

}
function displayCels (event){
  event.preventDefault();
let temperature = document.querySelector("#temperature");
temperature.innerHTML=Math.round(temp);
}
//let temp=null;

let fahrLink = document.querySelector("#fahrenheit");
fahrLink.addEventListener("click", displayFahr);

let celsLink = document.querySelector ("#celsius");
celsLink.addEventListener("click", displayCels);
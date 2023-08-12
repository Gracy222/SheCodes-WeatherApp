let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let today = document.querySelector("#day");
today.innerHTML = `${day}`;

let hourNow = now.getHours();
let hour = document.querySelector("#hour");
if (hourNow < 10) {
  hourNow = `0${hourNow}`;
}
hour.innerHTML = `${hourNow}`;

let minuteNow = now.getMinutes();
let minute = document.querySelector("#minute");
if (minuteNow < 10) {
  minuteNow = `0${minuteNow}`;
}
minute.innerHTML = `${minuteNow}`;

function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#cityPlace").innerHTML = response.data.name;
  document.querySelector("#tempOfTheDay").innerHTML = Math.round(
    response.data.main.temp
  );
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#searchTab").value;
  let apiKey = "6e904fd842325341fcba920f3ca982d7";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let changeCity = document.querySelector(".search-form");
changeCity.addEventListener("submit", showCity);

function typeCityAndTemp(response) {
  console.log(response.data.main.temp);
  console.log(response.data.name);

  let userCitytemp = Math.round(response.data.main.temp);
  let locatedCityTemp = document.querySelector("#tempOfTheDay");
  locatedCityTemp.innerHTML = `${userCitytemp}`;

  let cityOfUser = response.data.name;
  let locatedCity = document.querySelector("#cityPlace");
  locatedCity.innerHTML = `${cityOfUser}`;
}

let fahrenheit = 66;
let celsius = 28;

function convertToFahrenheit() {
  let temperatureElement = document.querySelector("#tempOfTheDay");
  let fahrenheitValue = (celsius * 9) / 5 + 32;
  temperatureElement.textContent = `${fahrenheitValue}`;
}

function convertToCelsius() {
  let temperatureElement = document.querySelector("#tempOfTheDay");
  temperatureElement.textContent = `${celsius}`;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

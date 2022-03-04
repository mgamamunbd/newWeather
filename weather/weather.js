/** @format */
//error handling
document.getElementById("errorMessage").style.display = "none";

const API_KEY = `7bd1a650d783aca91002f39377e12b0a`;
const getWeather = () => {
  const city = document.getElementById("city-name").value;

  if (!city) {
    displayError();
    return;
  }
  document.getElementById("errorMessage").style.display = "none";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayTemperature(data));
};

const displayError = (error) => {
  document.getElementById("errorMessage").style.display = "block";
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  //   console.log(temperature);
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);
  //set icons
  const urls = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const icon = document.getElementById("weather-icon");
  icon.setAttribute("src", urls); //   icon.src = urls;
};

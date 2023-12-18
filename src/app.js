//DATE TIME DAY
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let today_day = document.querySelector("#day");
today_day.innerHTML = day;

let date = now.getDate();
let today_date = document.querySelector("#date");
today_date.innerHTML = date;

let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let month = months[now.getMonth()];
let today_month = document.querySelector("#month");
today_month.innerHTML = month;

let year = now.getFullYear();
let today_year = document.querySelector("#year");
today_year.innerHTML = year;

let hour = now.getHours();
let today_hour = document.querySelector("#hour");
today_hour.innerHTML = hour;

let minute = now.getMinutes();
let today_minute = document.querySelector("#minute");
today_minute.innerHTML = minute;

//City name
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#formGroupExampleInput");

  let apiKey = "2a6oe4748bb5fftba3d905acff9c17d3";
  let city = searchInput.value;

  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(info);
}

function info(response) {
  let currentTemp = document.querySelector(".temp");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#place");
  cityElement.innerHTML = response.data.city;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

//TEMP CHANGE

function changeToFarenheit(event) {
  event.preventDefault();
  // let temperature = document.querySelector(".temp");

  let ftemp = Math.round((17 * 9) / 5 + 32);

  let temp = document.querySelector(".temp");
  temp.innerHTML = ftemp;
}

let f = document.querySelector(".f");
f.addEventListener("click", changeToFarenheit);

function changeToCelcius(event) {
  event.preventDefault();
  // let temperature = document.getElementsByClassName(".temp");

  let ctemp = Math.round(((63 - 32) * 5) / 9);

  let temp = document.querySelector(".temp");
  temp.innerHTML = ctemp;
}

let c = document.querySelector(".c");
c.addEventListener("click", changeToCelcius);

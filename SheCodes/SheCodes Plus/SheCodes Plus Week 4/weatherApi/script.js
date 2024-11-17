let apiKey = "1e4573e080b57c89fadd0873aeof420t";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function showTemp(temp) {
  let sydneyTemp = document.querySelector("h1");
  sydneyTemp.innerHTML = `It is ${Math.round(
    temp.data.temperature.current
  )} degrees in Sydney`;
}

axios.get(apiUrl).then(showTemp);

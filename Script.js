const apiKey = "7dd2614b2f4b65bf2348eafc52f64b55";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      resultDiv.innerHTML = `❌ Error: ${data.message}`;
    } else {
      resultDiv.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>🌥️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    }
  } catch (error) {
    resultDiv.innerHTML = "⚠️ Failed to fetch weather data.";
    console.error(error);
  }
}

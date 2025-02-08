document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#fetchWeatherButton");

    if (button) {
        button.addEventListener("click", fetchWeather);
    } else {
        console.error("Button with ID 'fetchWeatherButton' not found.");
    }
});

function fetchWeather() {
    const city = document.querySelector("#cityInput").value;

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    // ✅ Use relative path to work inside Docker with Nginx reverse proxy
    fetch(`/api/weather?city=${encodeURIComponent(city)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const outputDiv = document.querySelector("#weatherOutput");

            if (!outputDiv) {
                console.error("Div with ID 'weatherOutput' not found.");
                return;
            }

            if (data.error) {
                outputDiv.innerHTML = `<p style="color: red;">Error: ${data.error}</p>`;
            } else {
                outputDiv.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch((error) => {
            console.error("Error fetching weather:", error);
            alert("Failed to fetch weather data. Please try again later.");
        });
}


const apiKey = 'your_openweathermap_api_key_here'; // Replace with your API key

// Function to get weather information
function getWeather() {
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temp');
    const weatherDescription = document.getElementById('weather-description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    if (city === '') {
        alert('Please enter a city');
        return;
    }

    // Fetch data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            // Display the weather info
            cityName.innerText = `${data.name}, ${data.sys.country}`;
            temp.innerText = `Temperature: ${data.main.temp}°C`;
            weatherDescription.innerText = `Condition: ${data.weather[0].description}`;
            humidity.innerText = `Humidity: ${data.main.humidity}%`;
            windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;

            // Show weather info div
            weatherInfo.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch weather data');
        });
}

const weatherData = {
    city: "Delhi",
    temp: 36,
    humidity: 60,
    wind: 15
};

function displayWeather(data) {

    console.log(
        `City: ${data.city}`
    );

    console.log(
        `Temperature: ${data.temp}°C`
    );

    console.log(
        `Humidity: ${data.humidity}%`
    );

    console.log(
        `Wind: ${data.wind} km/h`
    );
}

displayWeather(weatherData);
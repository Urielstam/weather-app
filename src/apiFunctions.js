export const dataFetcher = (() => {
    let name;
    let date;
    let temp;
    let tempMin;
    let tempMax;
    let description;
    let feelsLike;
    let humidity;
    let chanceOfRain;
    let windSpeed;
    let pressure;
    let visibility;

    const fetchCurrentWeather = async (location) => {
        if (!location) {
            // eslint-disable-next-line no-param-reassign
            location = "jerusalem";
        }
        try {
            const currentResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=811d9c0815e66ee496dfa5a20d26075f&units=metric`
            );
            const currentResponseData = await currentResponse.json();
            name = currentResponseData.name;
            date = currentResponseData.dt;
            description = currentResponseData.weather[0].description;
            visibility = currentResponseData.visibility;
            temp = currentResponseData.main.temp;
            tempMin = currentResponseData.main.temp_min;
            tempMax = currentResponseData.main.temp_max;
            feelsLike = currentResponseData.main.feels_like;
            humidity = currentResponseData.main.humidity;
            pressure = currentResponseData.main.pressure;
            windSpeed = currentResponseData.wind.speed;
            // console.log(feelsLike);
            // console.log(temp);
            const lon = currentResponseData.coord.lon;
            const lat = currentResponseData.coord.lat;

            const forecastResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=811d9c0815e66ee496dfa5a20d26075f`
            );
            const forecastResponseData = await forecastResponse.json();
            // console.log(forecastResponseData);
        } catch (error) {
            console.log("Error:", error);
        }
        return {
            name,
            date,
            temp,
            tempMin,
            tempMax,
            description,
            feelsLike,
            humidity,
            pressure,
            windSpeed,
            visibility,
        };
    };

    return {
        fetchCurrentWeather,
    };
})();

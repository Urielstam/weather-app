export const dataFetcher = (() => {
    let name;
    let temp;

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
            console.log(currentResponseData.main.temp);
            console.log(currentResponseData.name);
            name = await currentResponseData.name;
            temp = currentResponseData.main.temp;
            const lon = currentResponseData.coord.lon;
            const lat = currentResponseData.coord.lat;

            const forecastResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=811d9c0815e66ee496dfa5a20d26075f`
            );
            const forecastResponseData = await forecastResponse.json();
            console.log(forecastResponseData);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return {
        fetchCurrentWeather,
        name,
        temp,
    };
})();

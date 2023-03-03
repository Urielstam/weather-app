import { dataFetcher } from "./apiFunctions";
import { utils } from "./utils";

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-city");
const searchBtn = document.querySelector(".search-btn");
const tempParam = document.getElementById("main-temp-text");
const descParam = document.getElementById("temp-desc-text");
const minMaxTempParam = document.getElementById("min-max-temp");
const feelsLikeParam = document.getElementById("detail-feels-like-param");
const humidityParam = document.getElementById("detail-humidity-param");
const windSpeedParam = document.getElementById("detail-wind-speed-param");
const pressureParam = document.getElementById("detail-pressure-param");
const visibilityParam = document.getElementById("detail-visibility-param");
const nameOfCityParam = document.querySelector(".city-text");
const timeOfCityParam = document.querySelector(".time-text");

export const displayCityDetails = (() => {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let city = searchInput.value;
        let details = dataFetcher.fetchCurrentWeather(city);
        details.then((result) => {
            if (result.temp) {
                console.log(result);
                nameOfCityParam.textContent = result.name;
                timeOfCityParam.textContent = utils.formatDate(result.date);
                tempParam.textContent = Math.round(result.temp) + "°";
                descParam.textContent = result.description;
                minMaxTempParam.textContent = `H:${Math.round(
                    result.tempMax
                )}° L:${Math.round(result.tempMin)}°`;
                feelsLikeParam.textContent = Math.round(result.feelsLike) + "°";
                humidityParam.textContent = result.humidity + "%";
                windSpeedParam.textContent =
                    Math.round(result.windSpeed) + "km/h";
                pressureParam.textContent = result.pressure + " hPa";
                visibilityParam.textContent = result.visibility / 1000 + "km";
            }
        });
        details.catch((error) => {
            console.log(error);
        });
    });
})();

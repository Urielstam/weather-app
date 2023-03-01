import { dataFetcher } from "./apiFunctions";

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-city");
const searchBtn = document.querySelector(".search-btn");

export const displayCityDetails = (() => {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let city = searchInput.value;
        let details = dataFetcher.fetchCurrentWeather(city);
        details.then((result) => {
            console.log(result.temp);
        });
    });
})();

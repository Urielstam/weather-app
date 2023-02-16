import { dataFetcher } from "./apiFunctions";

dataFetcher.fetchCurrentWeather("johannesburg");

const searchInput = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");
const text = document.querySelector(".txt");

searchBtn.addEventListener("click", (e) => {
    if (searchInput.value) {
        // let data = Promise.resolve(
        //     dataFetcher.fetchCurrentWeather(searchInput.value);
        //     )
        // text.innerText = dataFetcher.name;
    }
});

import { getWeatherData, getCountryFromCity } from "./apiService.js"
import { displayTitle, displayOverviewIcon, displayCurrentWeather, displayCurrentRange, displayStats, displayForecast, clearForecastCards } from "./view.js"
export { load }

function handleSearchBar() {
    const form = document.querySelector('form');
    const searchInput = document.querySelector('#location');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const location = searchInput.value;
        console.log(location);
        if (location === '') {
            // THROW ERROR AND GET MAD!
        } else {
            clearForecastCards();
            displayLocation(location);
        }
    })
}

function displayWeatherData(data, country) {
    displayTitle(data, country);
    displayOverviewIcon(data);
    displayCurrentWeather(data);
    displayCurrentRange(data);
    displayStats(data);
    displayForecast(data);
}

async function displayLocation(location) {
    const data = await getWeatherData(location);
    const country = await getCountryFromCity(location);
    if (data !== null) {
        displayWeatherData(data, country);
    }
}

async function load() {
    handleSearchBar();
    // Display data from Taipei upon initial page load
    const defaultCity = 'Taipei';
    displayLocation(defaultCity);
}
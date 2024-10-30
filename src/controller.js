import { getWeatherData, getCountryFromCity } from './apiService.js';
import {
    displayTitle,
    displayOverviewIcon,
    displayCurrentWeather,
    displayCurrentRange,
    displayStats,
    displayForecast,
    clearForecastCards,
    alertLocationError,
} from './view.js';
export { load };

let currentLocation = 'Taipei';

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
            displayLocation(location);
            searchInput.value = '';
        }
    });
}

async function displayLocation(location, isMetric) {
    const data = await getWeatherData(location, isMetric);
    const country = await getCountryFromCity(location);
    if (data !== null && country !== null) {
        currentLocation = location;
        clearForecastCards();
        displayWeatherData(data, country);
    } else {
        alertLocationError(location);
    }
}

function displayWeatherData(data, country) {
    displayTitle(data, country);
    displayOverviewIcon(data);
    displayCurrentWeather(data);
    displayCurrentRange(data);
    displayStats(data);
    displayForecast(data);
}

async function load() {
    handleSearchBar();
    // Display data from Taipei upon initial page load
    displayLocation(currentLocation, true);
}
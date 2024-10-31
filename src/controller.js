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
    displayUnits,
    displayLoader,
    hideLoader,
} from './view.js';
export { load };

let currentLocation = 'Taipei';
let isMetric = true;

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

function handleUnitButton() {
    const unitButton = document.querySelector('#unit');
    unitButton.addEventListener('click', () => {
        isMetric = !isMetric;
        displayLocation(currentLocation);
        displayUnits(isMetric);
        unitButton.textContent = isMetric ? 'Switch to imperial' : 'Switch to metric';
    });
}

async function displayLocation(location) {
    displayLoader();
    const data = await getWeatherData(location, isMetric);
    if (data !== null) {
        const country = await getCountryFromCity(data.latitude, data.longitude);
        if (country !== null) {
            currentLocation = location;
            clearForecastCards();
            displayWeatherData(data, country);
        }
    } else {
        alertLocationError(location);
    }
    hideLoader();
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
    handleUnitButton()
    // Display data from Taipei upon initial page load
    displayLocation(currentLocation);
}

import { getWeatherData, getCountryFromCity } from "./apiService.js"
import { displayTitle, displayIcon, displayWeather, displayRange, displayStats, displayForecast } from "./view.js"
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
            getWeatherData(location);
        }
    })
}

async function load() {
    handleSearchBar();
    // Display data from Taipei upon initial page load
    const defaultCity = 'Taipei';
    const data = await getWeatherData(defaultCity);
    const country = await getCountryFromCity(defaultCity);
    if (data !== null) {
        displayTitle(data, country);
        displayIcon(data);
        displayWeather(data);
        displayRange(data);
        displayStats(data);
        displayForecast(data);
    }
}
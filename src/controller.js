import { getWeatherData } from "./apiService.js"
export { load }

function initSearchBar() {
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

function load() {
    initSearchBar();
}
import './styles.css'
import { format } from "date-fns";
import { getWeatherData, toggleMetric, getCountryFromCity } from "./apiService.js"
import { load } from "./controller.js"


function initWeatherTitle(data, country) {
    const city = document.querySelector('h1 > .city');
    const countryElement = document.querySelector('h1 > .country');
    const date = document.querySelector('h2 > .date');
    const time = document.querySelector('h2 > .time');

    city.textContent = data.address;
    countryElement.textContent = country;
    const now = new Date();
    date.textContent = format(now, 'EEEE, LLLL do, uuuu');
    time.textContent = format(now, 'K:maaa')
}

async function initApp() {
    const defaultCity = 'Taipei';
    const data = await getWeatherData(defaultCity);
    const country = await getCountryFromCity(defaultCity);
    initWeatherTitle(data, country);
}

load();
initApp();

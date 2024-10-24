import './styles.css'
import { format } from "date-fns";
import { getWeatherData } from "./apiService.js"

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

function initWeatherTitle(data) {
    const location = document.querySelector('output > h1');
    const date = document.querySelector('h2 > .date');
    const time = document.querySelector('h2 > .time');
    const now = new Date();
    location.textContent = data.address;
    date.textContent = format(now, 'EEEE, LLLL do, uuuu');
    time.textContent = format(now, 'K:maaa')
}

async function initApp() {
    const data = await getWeatherData('Taipei');
    initWeatherTitle(data);
}

initSearchBar();
initApp();
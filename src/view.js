import { format } from 'date-fns';
import partlyCloudy from './svg/partly-cloudy-day.svg';
export {
    displayTitle,
    displayIcon,
    displayWeather,
    displayRange,
    displayStats,
    displayForecast,
};

function displayTitle(data, country) {
    const city = document.querySelector('h1 > .city');
    const countryElement = document.querySelector('h1 > .country');
    const date = document.querySelector('h2 > .date');
    const time = document.querySelector('h2 > .time');

    city.textContent = data.address;
    countryElement.textContent = country;
    const now = new Date().toLocaleString('en-US', { timeZone: data.timezone });
    date.textContent = format(now, 'EEEE, LLLL do, uuuu');
    time.textContent = format(now, 'KK:mmaaa');
}

function importImages(directory) {
    let images = {};
    directory.keys().forEach((item) => {
        images[item.replace('./', '')] = directory(item);
    });
    return images;
}

function displayIcon(data) {
    const images = importImages(
        require.context('./svg', false, /\.(png|jpe?g|svg)$/)
    );
    const icon = document.querySelector('.overview > .icon');
    const source = images[`${data.currentConditions.icon}.svg`];
    icon.src = source !== undefined ? source : partlyCloudy;
}

function displayWeather(data) {
    const temp = document.querySelector('#temp');
    const conditions = document.querySelector('#conditions');
    const feelsLike = document.querySelector('#feels-like');

    temp.textContent = data.currentConditions.temp;
    conditions.textContent = data.currentConditions.conditions;
    feelsLike.textContent = data.currentConditions.feelslike;
}

function displayRange(data) {
    const high = document.querySelector('#high');
    const low = document.querySelector('#low');

    high.textContent = data.days[0].tempmax;
    low.textContent = data.days[0].tempmin;
}

function displayStats(data) {
    const chanceOfRain = document.querySelector('#precip-prob');
    const amountOfRain = document.querySelector('#precip');
    const humidity = document.querySelector('#humidity');
    const sunrise = document.querySelector('#sunrise');
    const sunset = document.querySelector('#sunset');
    const windspeed = document.querySelector('#windspeed');

    chanceOfRain.textContent = data.currentConditions.precipprob;
    amountOfRain.textContent = data.currentConditions.precip;
    humidity.textContent = data.currentConditions.humidity;
    sunrise.textContent = data.currentConditions.sunrise;
    sunset.textContent = data.currentConditions.sunset;
    windspeed.textContent = data.currentConditions.windspeed;
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    const day = document.createElement('div');
    const icon = document.createElement('img');
    const temp = document.createElement('div');
    // create H reading
    temp.appendChild(document.createTextNode('H: '));
    const high = document.createElement('span');
    high.className = 'high';
    temp.appendChild(high);
    temp.appendChild(document.createTextNode('°'));
    const highUnit = document.createElement('span');
    highUnit.className = 'unit-temp';
    highUnit.textContent = 'C';
    temp.appendChild(highUnit);
    // create L reading
    temp.appendChild(document.createTextNode(' / L: '));
    const low = document.createElement('span');
    low.className = 'low';
    temp.appendChild(low);
    temp.appendChild(document.createTextNode('°'));
    const lowUnit = highUnit.cloneNode(true);
    temp.appendChild(lowUnit);
    card.append(day, icon, temp);

    // placeholder data
    day.textContent = 'Monday';
    icon.src = importImages(
        require.context('./svg', false, /\.(png|jpe?g|svg)$/)
    )['clear-day.svg'];
    high.textContent = '7';
    low.textContent = '5';

    return card;
}

function displayForecast() {
    const cardHolder = document.querySelector('.forecast-card-holder');
    cardHolder.appendChild(createCard());
}
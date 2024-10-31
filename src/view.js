import { format } from 'date-fns';
import partlyCloudy from './svg/partly-cloudy-day.svg';
export {
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
};

const images = importImages();
const temperatureUnitElements = document.querySelectorAll('.unit-temp');
const amountUnitElements = document.querySelectorAll('.unit-amount');
const speedUnitElements = document.querySelectorAll('.unit-speed');
const loader = document.querySelector('.loader-wrapper');
const output = document.querySelector('output');

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

function importImages() {
    let images = {};
    const directory = require.context('./svg', false, /\.(png|jpe?g|svg)$/);
    directory.keys().forEach((item) => {
        images[item.replace('./', '')] = directory(item);
    });
    return images;
}

function displayOverviewIcon(data) {
    const icon = document.querySelector('.overview > .icon');
    const source = images[`${data.currentConditions.icon}.svg`];
    icon.src = source !== undefined ? source : partlyCloudy;
}

function displayCurrentWeather(data) {
    const temp = document.querySelector('#temp');
    const conditions = document.querySelector('#conditions');
    const feelsLike = document.querySelector('#feels-like');

    temp.textContent = data.currentConditions.temp;
    conditions.textContent = data.currentConditions.conditions;
    feelsLike.textContent = data.currentConditions.feelslike;
}

function displayCurrentRange(data) {
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

function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');
    const day = document.createElement('div');
    const icon = document.createElement('img');
    const temp = document.createElement('div');
    // create H reading
    temp.appendChild(
        document.createTextNode(`H: ${Math.round(+data.tempmax)}°`)
    );
    const highUnit = document.createElement('span');
    highUnit.className = 'unit-temp';
    highUnit.textContent = 'C';
    temp.appendChild(highUnit);
    // create L reading
    temp.appendChild(
        document.createTextNode(` / L: ${Math.round(+data.tempmin)}°`)
    );
    const lowUnit = highUnit.cloneNode(true);
    temp.appendChild(lowUnit);
    card.append(day, icon, temp);

    // placeholder data
    const epochMs = data.datetimeEpoch * 1000;
    day.textContent = format(new Date(epochMs), 'iiii');
    icon.src = images[`${data.icon}.svg`];

    return card;
}

function displayForecast(data) {
    const cardHolder = document.querySelector('.forecast-card-holder');
    data.days.forEach((day, index) => {
        if (index == 0) return;
        cardHolder.appendChild(createCard(day));
    });
}

function clearForecastCards() {
    const cardHolder = document.querySelector('.forecast-card-holder');
    cardHolder.textContent = '';
}

function alertLocationError(location) {
    alert(`There is no data available for location: ${location}`);
}

function displayUnits(isMetric) {
    if (isMetric) {
        displayMetricUnits();
    } else {
        displayImperialUnits();
    }
}

function displayMetricUnits() {
    temperatureUnitElements.forEach((element) => {
        element.textContent = 'C';
    });
    amountUnitElements.forEach((element) => {
        element.textContent = 'mm';
    });
    speedUnitElements.forEach((element) => {
        element.textContent = 'km/h';
    });
}

function displayImperialUnits() {
    temperatureUnitElements.forEach((element) => {
        element.textContent = 'F';
    });
    amountUnitElements.forEach((element) => {
        element.textContent = 'in';
    });
    speedUnitElements.forEach((element) => {
        element.textContent = 'mph';
    });
}

function displayLoader() {
    if (loader.classList.contains('hidden')) {
        loader.classList.remove('hidden');
    }
    hideData();
}

function hideLoader() {
    if (!loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
    }
    displayData();
}

function displayData() {
    if (output.classList.contains('hidden')) {
        output.classList.remove('hidden');
    }
}

function hideData() {
    if (!output.classList.contains('hidden')) {
        output.classList.add('hidden');
    }
}

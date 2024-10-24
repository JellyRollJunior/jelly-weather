export { getWeatherData }

const API_KEY = 'JRPNTC8Y8V73YMJ6EY5B684W7';
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/`;

async function makeApiRequest(endpoint) {
    const response = await fetch(endpoint, {mode: 'cors'});
    if (response.ok) {
        const json = await response.json();
        console.log(json);
    }
}

function getWeatherTimelineEndpoint(location) {
    return BASE_URL + `timeline/${location}?key=${API_KEY}`;
}

async function getWeatherData(location) {
    return await makeApiRequest(getWeatherTimelineEndpoint(location));
}
export { getWeatherData, toggleMetric };

const API_KEY = 'JRPNTC8Y8V73YMJ6EY5B684W7';
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
let metric = true;

function toggleMetric() {
    metric = !metric;
}

async function makeApiRequest(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, { mode: 'cors' });
        console.log(response);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.log('API request failed', error);
        return null;
    }
}

function getWeatherEndpoint(location) {
    const unit = metric ? 'unitGroup=metric' : 'unitGroup=us';
    return `${location}/next7days?key=${API_KEY}&${unit}`;
}

function extractWeatherData(data) {
    const { address, currentConditions, days, description, latitude, longitude } = data;
    const filteredData = {
        address,
        currentConditions,
        days,
        description,
        latitude,
        longitude,
    };
    return filteredData;
}

async function getWeatherData(location) {
    const response = await makeApiRequest(getWeatherEndpoint(location));
    if (response === null) {
        return null;
    }
    const json = await response.json();
    console.log('raw data: ');
    console.log(json);
    const data = extractWeatherData(json);
    console.log('cleaned data: ');
    console.log(data);
    return data;
}

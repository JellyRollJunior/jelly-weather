export { getWeatherData };

const API_KEY = 'JRPNTC8Y8V73YMJ6EY5B684W7';
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
let metric = true;

async function makeApiRequest(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('API request failed', error);
        throw error;
    }
}

function getWeatherEndpoint(location) {
    const unit = metric ? 'unitGroup=metric' : 'unitGroup=us';
    return `${location}/next7days?key=${API_KEY}&${unit}`;
}

function extractWeatherData(data) {
    const { address, days, description, latitude, longitude } = data;
    const filteredData = {
        address,
        days,
        description,
        latitude,
        longitude,
    };
    return filteredData;
}

async function getWeatherData(location) {
    const response = await makeApiRequest(getWeatherEndpoint(location));
    const data = extractWeatherData(response);
    console.log('cleaned data: ');
    console.log(data);
    return data;
}

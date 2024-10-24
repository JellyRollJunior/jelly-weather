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

function processCurrentConditionsData(data) {
    const { temp, icon, feelslike, humidity, precip, precipprob, sunrise, sunset, windspeed } = data;
    const filteredData = { 
        temp, 
        icon, 
        feelslike, 
        humidity, 
        precip, 
        precipprob, 
        sunrise, 
        sunset, 
        windspeed 
    };
    return filteredData;
}

function processData(data) {
    const { address, currentConditions, days, description } = data;
    const processedCurrentConditions = processCurrentConditionsData(currentConditions);
    const processedData = {
        address,
        currentConditions: processedCurrentConditions,
        days,
        description,
    };
    return processedData;
}

async function getWeatherData(location) {
    const response = await makeApiRequest(getWeatherEndpoint(location));
    if (response === null) {
        return null;
    }
    const json = await response.json();
    console.log('raw data: ');
    console.log(json);
    const data = processData(json);
    console.log('cleaned data: ');
    console.log(data);
    return data;
}

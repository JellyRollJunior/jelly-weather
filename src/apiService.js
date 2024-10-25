export { getWeatherData, toggleMetric, getCountryFromCity };

const WEATHER_API_KEY = 'JRPNTC8Y8V73YMJ6EY5B684W7';
const WEATHER_BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
const GEONAMES_BASE_URL = 'http://api.geonames.org/'
let metric = true;

function toggleMetric() {
    metric = !metric;
}

async function makeApiRequest(endpoint) {
    try {
        const response = await fetch(endpoint, { mode: 'cors' });
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
    return `${WEATHER_BASE_URL}${location}/next7days?key=${WEATHER_API_KEY}&${unit}`;
}

function processCurrentConditionsData(data) {
    const { temp, icon, feelslike, humidity, precip, precipprob, sunrise, sunset, windspeed, conditions } = data;
    const filteredData = { 
        temp, 
        icon, 
        feelslike, 
        humidity, 
        precip, 
        precipprob, 
        sunrise, 
        sunset, 
        windspeed,
        conditions,
    };
    return filteredData;
}

function processWeatherData(data) {
    const { address, currentConditions, days, description, timezone } = data;
    const processedCurrentConditions = processCurrentConditionsData(currentConditions);
    const processedData = {
        address,
        currentConditions: processedCurrentConditions,
        days,
        description,
        timezone,
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
    const data = processWeatherData(json);
    console.log('cleaned data: ');
    console.log(data);
    return data;
}

function getCountryEndpoint(city) {
    return `${GEONAMES_BASE_URL}searchJSON?q=${city}&maxRows=1&username=jellyrolljunior`;
}

function processCountryData(data) {
    return data.geonames[0].countryName;
}

async function getCountryFromCity(city) {
    const response = await makeApiRequest(getCountryEndpoint(city));
    if (response === null) {
        return null;
    }
    const json = await response.json();
    return processCountryData(json);
}
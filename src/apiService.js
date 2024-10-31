export { getWeatherData, getCountryFromCity };

const WEATHER_API_KEY = 'JRPNTC8Y8V73YMJ6EY5B684W7';
const WEATHER_BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
const LOCATION_IQ_API_KEY = 'pk.0304cebf56197b22e0dfad9a2c4121f3';
const LOCATION_IQ_BASE_URL = 'https://us1.locationiq.com/v1/reverse';

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

function getWeatherEndpoint(location, isMetric) {
    const unit = isMetric ? 'unitGroup=metric' : 'unitGroup=us';
    return `${WEATHER_BASE_URL}${location}/next7days?key=${WEATHER_API_KEY}&${unit}`;
}

function processCurrentConditionsData(data) {
    const { temp, icon, feelslike, humidity, precip, precipprob, sunrise, sunset, windspeed, conditions } = data;
    const processedData = { 
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
    return processedData;
}

function processDaysData(data) {
    const processedData = data.map((day) => {
        const { tempmax, tempmin, datetimeEpoch, icon} = day;
        const processedDay = {
            tempmax,
            tempmin,
            datetimeEpoch,
            icon,
        };
        return processedDay;
    })
    return processedData
}

function processWeatherData(data) {
    const { address, currentConditions, days, description, timezone, latitude, longitude } = data;
    const processedCurrentConditions = processCurrentConditionsData(currentConditions);
    const processedDays = processDaysData(days);
    const processedData = {
        address,
        currentConditions: processedCurrentConditions,
        days: processedDays,
        description,
        timezone,
        latitude,
        longitude,
    };
    return processedData;
}

async function getWeatherData(location, isMetric) {
    const response = await makeApiRequest(getWeatherEndpoint(location, isMetric));
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

function getCountryEndpoint(latitude, longitude) {
    return `${LOCATION_IQ_BASE_URL}?key=${LOCATION_IQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json&`;
}

function processCountryData(data) {
    const { country, city } = data.address;
    return { country, city } ;
}

async function getCountryFromCity(latitude, longitude) {
    const response = await makeApiRequest(getCountryEndpoint(latitude, longitude));
    if (response === null) {
        return null;
    }
    const json = await response.json();
    if (json.totalResultsCount === 0) {
        return null;
    }
    return processCountryData(json);
}
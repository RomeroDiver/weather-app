const WEATHER_API_KEY = 'fddd78831f20e756611072990515c981';
const baseEndpoint = 'http://api.openweathermap.org/data/2.5';

function handleFailedResponse(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.status = response.status;
    throw error;
  }
  return response;
}

function fetchRequest(url) {
  return fetch(url)
    .then(handleFailedResponse)
    .then(response => response.json());
}

export function getCurrentWeather(city) {
  const url = `${baseEndpoint}/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`;

  return fetchRequest(url);
}

export function getForecast(city) {
  const url = `${baseEndpoint}/forecast?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`;

  return fetchRequest(url);
}
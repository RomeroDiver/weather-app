const WEATHER_API_KEY = 'fddd78831f20e756611072990515c981';
const baseEndpoint = 'http://api.openweathermap.org/data/2.5';

export function getCurrentWeather(city) {
  const url = `${baseEndpoint}/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`;

  return fetch(url);
}
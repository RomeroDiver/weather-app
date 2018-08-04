import React, { PureComponent } from 'react';
import {
  getCurrentWeather,
  getForecast,
} from '../services/weather';

export const WeatherContext = React.createContext({});

class WeatherStore extends PureComponent {
  state = {
    weather: null,
    weatherForecast: [],
    error: null
  }

  loadWeather = (city) => {
    getCurrentWeather(city)
      .then(response => {
        const weather = {
          wind: { speed: response.wind.speed },
          temperature: response.main.temp,
          humidity: response.main.humidity,
          cloudiness: response.clouds.all,
          description: response.weather[0].description,
          city: response.name,
        }
        this.setState({ weather })
      })
      .catch(this.handleError)
  }

  loadForecast = city => {
    return getForecast(city)
      .then(response => {
        const weatherForecast = response.list.map(((f, i) => ({
          dt: f.dt,
          temperature: f.main.temp,
          description: f.weather[0].description,
        })));
        this.setState({ weatherForecast });
      })
      .catch(this.handleError);
  }

  handleError = (e) => {
    if (e.status === 404) {
      this.setState({ error: e.status })
    }
  }

  dismissError = () => {
    this.setState({ error: null });
  }

  render() {
    const value = {
      weather: this.state.weather,
      weatherForecast: this.state.weatherForecast,
      error: this.state.error,
      actions: {
        loadWeather: this.loadWeather,
        dismissError: this.dismissError,
        loadForecast: this.loadForecast,
      }
    }
    return (
      <WeatherContext.Provider value={value}>
        {this.props.children}
      </WeatherContext.Provider>
    )
  }
}

export default WeatherStore;
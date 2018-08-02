import React, { PureComponent } from 'react';
import {
  getCurrentWeather,
  getWeatherHistory,
} from '../services/weather';

export const WeatherContext = React.createContext({});

class WeatherStore extends PureComponent {
  state = {
    weather: null,
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
      error: this.state.error,
      actions: {
        loadWeather: this.loadWeather,
        dismissError: this.dismissError
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
import React, { PureComponent } from 'react';
import {
  getCurrentWeather,
} from '../services/weather';

export const WeatherContext = React.createContext({});

class WeatherStore extends PureComponent {
  state = {
    weather: null
  }

  loadWeather = (city) => {
    getCurrentWeather(city)
      .then(response => response.json())
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
  }

  render() {
    const value = {
      weather: this.state.weather,
      actions: {
        loadWeather: this.loadWeather,
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
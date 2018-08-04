import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeatherForecastCard from '../WeatherForecastCard';
import './styles.css';

export default class WeatherForecast extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    loadForecast: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { city, loadForecast, weatherForecast } = this.props;
    loadForecast(city);
  }

  render() {
    return (
      <div className="weatherForecast">
        {this.props.weatherForecast.map(w => (
          <WeatherForecastCard weather={w} key={w.dt} />
        ))}
      </div>
    )
  }
}

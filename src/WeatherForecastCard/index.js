import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import { getDay, formatHour } from '../services/date';
import Temperature from '../Temperature';
import './styles.css';

export default class WeatherForecastCard extends Component {
  static propTypes = {
    weather: PropTypes.shape({

    })
  }

  render() {
    const { weather } = this.props;
    const date = new Date(weather.dt * 1000);
    return (
      <Card classes={{ root: 'weatherForecastCard'}}>
        <div className="weatherForecastCard__heading">
          <span className="weatherForecastCard__day">{getDay(date.getDay())}</span>
          <span className="weatherForecastCard__time">{formatHour(date)}</span>
        </div>
        <div className="weatherForecastCard__content">
          <Temperature temperature={weather.temperature} />
          <p className="weatherForecastCard__description">{weather.description}</p>
        </div>
      </Card>
    )
  }
}

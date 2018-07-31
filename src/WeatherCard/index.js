import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import './styles.css';
import Raining from '../Icons/Raining';
import Drop from '../Icons/Drop';
import Wind from '../Icons/Wind';
import { getDay } from '../services/date';
import Temperature from '../Temperature';

class WeatherCard extends PureComponent {
  iconsWidth = 24
  iconsHeight = 24
  today = new Date()

  render() {
    const { weather } = this.props;
    return (
      <Card raised classes={{ root: 'weatherCard' }}>
        <div className="weatherCard__content">
          <div className="weatherCard__weather">
            <h2 className="weatherCard__day">{getDay(this.today.getDay())}</h2>
            <Temperature temperature={weather.temperature} />
            <p className="weatherCard__weatherDesc">{weather.description}</p>
            <span className="weatherCard__city">{weather.city}</span>
          </div>
          <div className="weatherCard__details">
            <div>
              <Raining width={this.iconsWidth} height={this.iconsHeight} /> {weather.cloudiness}%
            </div>
            <div>
              <Drop width={this.iconsWidth} height={this.iconsHeight} /> {weather.humidity}%
            </div>
            <div>
              <Wind width={this.iconsWidth} height={this.iconsHeight} /> {weather.wind.speed}m/s
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default WeatherCard;
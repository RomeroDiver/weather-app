import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';
import TemperatureIcon from '../Icons/Temperature';

const propTypes = {
  temperature: PropTypes.number.isRequired
}

const Temperature = ({ temperature }) => (
  <div className="temperature__wrapper">
    <TemperatureIcon width={48} height={48} />
    <div>
      <span className="temperature__val">{Math.round(temperature)}</span>
      <span className="temperature__units">&deg;C</span>
    </div>
  </div>
)

Temperature.propTypes = propTypes

export default Temperature

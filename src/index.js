import React from "react";
import ReactDOM from "react-dom";
import WeatherCard from './WeatherCard';
import WeatherStore, { WeatherContext } from './WeatherStore';
import Search from './Search';
import './styles.css';

/**
 * TODO:
 * 1. UI changes
 * 2. Weather history
 * 3. Next/previous day
 */
const Index = () => {
  return (
    <WeatherStore>
      <WeatherContext.Consumer>
        {
          ({ weather, actions }) => {
            return (
              <main className="mainApp">
                <div className="mainApp__header">
                  <Search loadWeather={actions.loadWeather} />
                </div>
                <section className="mainApp__content">
                  { weather && <WeatherCard weather={weather} /> }
                </section>
              </main>
            );
          }
        }
      </WeatherContext.Consumer>
    </WeatherStore>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
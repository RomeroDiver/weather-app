import React from "react";
import ReactDOM from "react-dom";
import WeatherCard from './WeatherCard';
import WeatherStore, { WeatherContext } from './WeatherStore';
import Search from './Search';
import './styles.css';
import ErrorHandler from "./ErrorHandler";

const Index = () => {
  return (
    <WeatherStore>
      <WeatherContext.Consumer>
        {
          ({ weather, actions, error }) => {
            return (
              <main className="mainApp">
                <div className="mainApp__header">
                  <Search loadWeather={actions.loadWeather} placeholder="Enter city" />
                </div>
                <section className="mainApp__content">
                  { weather && <WeatherCard weather={weather} /> }
                </section>
                <ErrorHandler error={error} dismissError={actions.dismissError} />
              </main>
            );
          }
        }
      </WeatherContext.Consumer>
    </WeatherStore>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
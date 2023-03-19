import React from "react";
import { CurrentWeatherModel, SettingsModel } from "../../models";
import "./CurrentWeather.scss";

type CurrentWeatherProps = {
  settings: SettingsModel;
  data: CurrentWeatherModel;
};

export const CurrentWeather = ({ settings, data }: CurrentWeatherProps) => {
  const weatherCode = data.weather.icon;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";
  return (
    <div className="current-weather">
      <div className="image">
        <img
          src={`https://openweathermap.org/img/wn/${weatherCode}@2x.png`}
          className="icon"
          alt=""
        />
      </div>
      <div className="details">
        <label className="temp">
          {Math.round(data.temp)}°<span>{unitSymbol}</span>
        </label>
        <label className="feelslike">
          Feels like: <span>{Math.round(data.feels_like)}°</span>
        </label>
        <label className="description">{data.weather.description}</label>
      </div>
    </div>
  );
};

export default CurrentWeather;

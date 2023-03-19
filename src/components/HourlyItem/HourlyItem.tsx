import React from "react";
import { CurrentWeatherModel, SettingsModel } from "../../models";
import "./HourlyItem.scss";

type HourlyItemProps = {
  settings: SettingsModel;
  data: CurrentWeatherModel;
};

export const HourlyItem = ({ settings, data }: HourlyItemProps) => {
  const weatherCode = data.weather.icon;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";
  return (
    <div className="hourly-item">
      <label className="hour">{new Date(data.dt * 1000).getHours()}:00</label>
      <img
        src={`https://openweathermap.org/img/wn/${weatherCode}.png`}
        className="icon-small"
        alt=""
      />
      <label className="temp">
        {Math.round(data.temp)}°{unitSymbol}
      </label>
    </div>
  );
};
export default HourlyItem;

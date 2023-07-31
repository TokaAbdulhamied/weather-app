import React, { useState } from "react"
import "./forecast.css"
import dayjs from "dayjs"
import Switch from "react-switch"
import ToggleSwitch from "../ToggleSwitch"
import { celciusToFahrenheit } from "../../utils"
export default function ForecastDetailedItem({
  data,
  city,
  onToggleClick,
  unit,
}) {
  console.log("unit", unit)
  return (
    <div className="active-item">
      <div className="row header">
        <h6 className="day">{dayjs(data.dt_txt).format("ddd")}</h6>
        <ToggleSwitch onChange={onToggleClick} />
      </div>
      <div className="row content" style={{ gap: "30%" }}>
        <div className="col">
          <h4 className="city">{city}</h4>
          <div className="weather">
            <img
              src={`icons/${data.weather[0].icon}.png`}
              className="icon"
              alt="weather"
            />
            <span className="temp">
              {unit === "C"
                ? Math.round(data.main.temp)
                : celciusToFahrenheit(data.main.temp)}
              °
            </span>
          </div>
          <h6 className="description">{data.weather[0].description}</h6>
        </div>
        <div className="col details">
          <div className="row info">
            <p className="info-key">Feels Like </p>
            <p className="info-value"> {data.main.feels_like}</p>
          </div>
          <div className="row info">
            <p className="info-key">Max Temp </p>
            <p className="info-value">
              {unit === "C"
                ? Math.round(data.main.temp_max)
                : celciusToFahrenheit(data.main.temp_max)}
              °
            </p>
          </div>
          <div className="row info">
            <p className="info-key">Min Temp </p>
            <p className="info-value">
              {unit === "C"
                ? Math.round(data.main.temp_min)
                : celciusToFahrenheit(data.main.temp_min)}
              °
            </p>
          </div>
          <div className="row info">
            <p className="info-key">Humidity </p>
            <p className="info-value"> {data.main.humidity}</p>
          </div>
          <div className="row info">
            <p className="info-key">Pressure</p>
            <p className="info-value"> {data.main.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

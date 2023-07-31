import React from "react"
import "./forecast.css"
export default function ForecastDetailedItem({ data, city }) {
  return (
    <div className="active-item">
      <div className="row">
        <h6>Day</h6>
        <p>F/C</p>
      </div>
      <div className="row" style={{ gap: "30%" }}>
        <div className="col">
          <h4 className="city">{city}</h4>
          <div className="weather">
            <img
              src={`icons/${data.weather[0].icon}.png`}
              className="icon"
              alt="weather"
            />
            <span className="temp">
              {Math.round(data.main.temp)}
              °C
            </span>
          </div>
          <h6 className="description">{data.weather[0].description}</h6>
        </div>
        <div className="col details">
          <div className="row info">
            <p className="info-key">Feels Like </p>
            <p className="info-value"> {data.main.feels_like}</p>
          </div>
          <p className="info-value" style={{ textAlign: "center" }}>
            {Math.round(data.main.temp_max)}
            °C/ {Math.round(data.main.temp_min)}
            °C
          </p>
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

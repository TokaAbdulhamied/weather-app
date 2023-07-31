import React, { useState } from "react"
import "./forecast.css"
const ForecastItem = ({ data, activeKey, setActiveItem }) => {
  return (
    <div className="forecast-item" onClick={() => setActiveItem(data)}>
      <img
        src={`icons/${data.weather[0].icon}.png`}
        className="icon"
        alt="weather"
      />
      <p className="temp">
        {Math.round(data.main.temp)}
        °C
      </p>
      <p className="description">{data?.weather[0].description}</p>
      <p className="date">{data.dt_txt}</p>
      <p>is {activeKey === data.dt ? "active" : "inactive"}</p>
    </div>
  )
}

export default ForecastItem

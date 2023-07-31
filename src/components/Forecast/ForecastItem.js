import React, { useEffect, useState } from "react"
import "./forecast.css"
import dayjs from "dayjs"
import { celciusToFahrenheit } from "../../utils"
const ForecastItem = ({ data, activeKey, setActiveItem, unit }) => {
  return (
    <div className="forecast-item" onClick={() => setActiveItem(data)}>
      <img
        src={`icons/${data.weather[0].icon}.png`}
        className="icon"
        alt="weather"
      />
      <p className="date">{dayjs(data.dt_txt).format("ddd")}</p>
      <p className="date">{dayjs(data.dt_txt).format("DD-MM-YYYY")}</p>
      <p className="temp">
        {unit === "C"
          ? Math.round(data.main.temp)
          : celciusToFahrenheit(data.main.temp)}
        °
      </p>
      <p className="description">{data?.weather[0].description}</p>
    </div>
  )
}
export default ForecastItem

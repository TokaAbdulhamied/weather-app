import React, { useState } from "react"
import "./forecastItem.css"
const ForecastItem = ({ data }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="forecast-item">
      {/* <div className="title" onClick={() => setIsActive(!isActive)}> */}
      {/* <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div> */}
      {/* <div className="daily-item"> */}
      <img
        src={`icons/${data.weather[0].icon}.png`}
        className="icon"
        alt="weather"
      />
      <label className="temp">
        {Math.round(data.main.temp)}
        °C
      </label>
      <label className="description">{data.weather[0].description}</label>
      <label className="date">{data.dt_txt}</label>

      {/* </div> */}
      {/* </div> */}
      {/* {isActive && <div className="forecast-content">{content}</div>} */}
    </div>
  )
}

export default ForecastItem

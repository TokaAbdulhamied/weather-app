import React from "react"
import ForecastItem from "../ForecastItem/ForecastItem"
import "./forecastList.css"
export default function ForecastList({ forecastData }) {
  return (
    <div className="container">
      {forecastData.map((item) => (
        <ForecastItem data={item} />
      ))}
    </div>
  )
}

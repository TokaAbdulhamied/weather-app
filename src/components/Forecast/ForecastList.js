import React, { useState } from "react"
import ForecastItem from "./ForecastItem"
import "./forecast.css"
import ForecastDetailedItem from "./ForecastDetailedItem"
export default function ForecastList({ forecastData, city }) {
  const [activeItem, setActiveItem] = useState(forecastData[0])
  const [unit, setUnit] = useState("C")
  return (
    <div className="container">
      {forecastData.length > 0 && (
        <ForecastDetailedItem
          unit={unit}
          data={activeItem}
          city={city}
          onToggleClick={(toggle) => setUnit(toggle ? "C" : "F")}
        />
      )}
      {forecastData.map((item) => (
        <ForecastItem
          unit={unit}
          data={item}
          key={item.dt}
          activeKey={activeItem.dt}
          setActiveItem={setActiveItem}
        />
      ))}
    </div>
  )
}

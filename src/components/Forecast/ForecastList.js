import React, { useState } from "react"
import ForecastItem from "./ForecastItem"
import "./forecast.css"
import ForecastDetailedItem from "./ForecastDetailedItem"
export default function ForecastList({ forecastData, city }) {
  const [activeItem, setActiveItem] = useState(forecastData[0])

  return (
    <div className="container">
      {forecastData.length > 0 && (
        <ForecastDetailedItem data={activeItem} city={city} />
      )}
      {forecastData.map((item) => (
        <ForecastItem
          data={item}
          key={item.dt}
          activeKey={activeItem.dt}
          setActiveItem={setActiveItem}
        />
      ))}
    </div>
  )
}

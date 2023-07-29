import axios from "axios"
import "./App.css"
import Search from "./components/Search"
import { useState } from "react"

function App() {
  const [forecast, setForecast] = useState([])
  console.log(process.env.REACT_APP_WEATHER_KEY, "appp")
  const handleChange = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?&lat=42.46245&lon=1.50209&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(({ data }) => {
        console.log(data.list)
        let forecastData = []
        for (let i = 0; i < data.list.length; i += 8) {
          forecastData.push(data.list[i])
          console.log(data.list[i].dt)
        }
        setForecast(forecastData)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="App">
      <header>Weather Forecast app</header>
      <main className="App-main">
        <Search handleChange={handleChange} />
        <div>
          {forecast.map((item) => (
            <p>{item.main.temp}</p>
          ))}
        </div>
      </main>
      {/* <footer>
        <p>Weather Forecast app with react- Toka Abdulhamied</p>
      </footer> */}
    </div>
  )
}

export default App

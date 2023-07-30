import "./App.css"
import { useState } from "react"
import ForecastList from "./components/ForecastList"
import SelectAsyncPaginate from "./components/SelectAsyncPaginate"
import { getWeather } from "./apis"
function App() {
  const [forecast, setForecast] = useState([])
  const [city, setCity] = useState(null)
  const handleChange = async (city) => {
    setCity(city)
    let { lat, lon } = city.data
    let { data } = await getWeather(lat, lon)
    try {
      let forecastData = []
      for (let i = 0; i < data.list.length; i += 8) {
        forecastData.push(data.list[i])
      }
      setForecast(forecastData)
      console.log(forecastData)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <header className="App-header">Weather Forecast For You</header>

      <main className="App-main">
        <SelectAsyncPaginate value={city} onChange={handleChange} />
        <ForecastList forecastData={forecast} />
      </main>
      {/* <footer>
        <p>Weather Forecast app with react- Toka Abdulhamied</p>
      </footer> */}
    </div>
  )
}

export default App

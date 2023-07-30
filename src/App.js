import "./App.css"
import { useState } from "react"
import ForecastList from "./components/ForecastList/ForecastList"
import SelectAsyncPaginate from "./components/Search/SelectAsyncPaginate"
import { getWeather } from "./apis"
import DotLoader from "react-spinners/DotLoader"
function App() {
  const [forecast, setForecast] = useState([])
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = async (city) => {
    console.log(city)
    setCity(city)
    let { lat, lon } = city.value
    setLoading(true)
    let { data } = await getWeather(lat, lon)
    try {
      let forecastData = []
      for (let i = 0; i < data.list.length; i += 8) {
        forecastData.push(data.list[i])
      }
      setForecast(forecastData)
      setLoading(false)
      console.log(forecastData)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Weather Forecast <span style={{ color: "#f38e14" }}> For You ...</span>
      </header>
      <main className="App-main">
        <SelectAsyncPaginate value={city} onChange={handleChange} />
        <DotLoader color="#f38e14" speedMultiplier={3} loading={loading} />
        {!loading && <ForecastList forecastData={forecast} />}
      </main>
    </div>
  )
}

export default App

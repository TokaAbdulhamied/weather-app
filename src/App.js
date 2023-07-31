import "./App.css"
import { useState } from "react"
import ForecastList from "./components/Forecast/ForecastList"
import SelectAsyncPaginate from "./components/Search/SelectAsyncPaginate"
import { getWeather } from "./apis"
import DotLoader from "react-spinners/DotLoader"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  const [forecast, setForecast] = useState([])
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = async (city) => {
    console.log(city)
    setCity(city)
    let { lat, lon } = city.value
    setLoading(true)

    try {
      let { data } = await getWeather(lat, lon)
      let forecastData = []
      for (let i = 0; i < data.list.length; i += 8) {
        forecastData.push(data.list[i])
      }
      setForecast(forecastData)
      setLoading(false)
      console.log(forecastData)
    } catch (err) {
      setLoading(false)
      setForecast([])
      toast.error("something went wrong")
      console.log(err)
    }
  }

  return (
    <>
      <div className="App">
        <header
          className="App-header"
          style={{ marginTop: forecast.length > 0 ? "3%" : "10%" }}
        >
          Weather Forecast{" "}
          <span style={{ color: "#f38e14" }}> For You ...</span>
        </header>
        <main className="App-main">
          <SelectAsyncPaginate value={city} onChange={handleChange} />
          <DotLoader color="#f38e14" speedMultiplier={3} loading={loading} />
          {!loading && (
            <ForecastList forecastData={forecast} city={city?.label} />
          )}
        </main>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          // width="150px"
        />
      </div>
    </>
  )
}

export default App

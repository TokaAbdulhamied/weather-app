import axios from "axios"

export async function getWeather(lat, lon) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`
  )
}
export async function getCities({ page, searchQuery }) {
  let params = {}
  params.limit = 10
  params.offset = (page - 1) * 10
  if (searchQuery) params.namePrefix = searchQuery
  return axios.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
    params: params,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_GIO_KEY,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  })
}

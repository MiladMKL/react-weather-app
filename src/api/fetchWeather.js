import axios from "axios"

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

const API_KEY = '462d82fb43aef5eceb9554e53e178b69'


export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  })

  return data
}

export const fetchForecast = async (query) => {
  const { forecast } = await axios.get(FORECAST_URL, {
    params: {
      q: query,
      APPID: API_KEY
    }
  })

  return forecast
}



import axios from "axios";

const WEATHER_API_URL = "http://dataservice.accuweather.com";

export const key = process.env.REACT_APP_API_KEY;

export const api = axios.create({
  baseURL: WEATHER_API_URL,
});

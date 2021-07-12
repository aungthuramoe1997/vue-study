import axios from "axios";
import { URL, API_KEY } from "../../const/Constant";

const weatherAPI = {
  getWeatherByCity,
};

function getWeatherByCity(city) {
  return axios.get(`${URL.WEATHER}?q=${city}&units=metric&appid=${API_KEY}`);
}
export default weatherAPI;

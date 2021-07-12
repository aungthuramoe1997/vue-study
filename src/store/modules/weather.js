import weatherAPI from "../../api/weather/weather";
const weatherModule = {
  namespaced: true,
  state: () => ({
    weather: {},
    weatherNotFound: false,
  }),
  mutations: {
    getWeatherByCity(state, weatherData) {
      state.weatherNotFound = false;
      state.weather = weatherData;
    },
    searchError(state, val) {
      state.weatherNotFound = val;
    },
  },
  actions: {
    getWeatherByCity({ commit }, city) {
      console.log("get weather by city ", city);
      weatherAPI
        .getWeatherByCity(city)
        .then((response) => {
          console.log("weather res :: ", response);
          commit("getWeatherByCity", response.data);
        })
        .catch(() => commit("searchError", true));
    },
  },
};

export default weatherModule;

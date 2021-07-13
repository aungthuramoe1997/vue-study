import weatherAPI from "../../api/weather/weather";
import useCommon from "../../util/useCommon";
const { updateLoadingStatus, updateErrorStatus } = useCommon();
const weatherModule = {
  namespaced: true,
  state: () => ({
    weather: {},
  }),
  mutations: {
    getWeatherByCity(state, weatherData) {
      state.weather = weatherData;
    },
  },
  actions: {
    getWeatherByCity({ commit }, city) {
      updateLoadingStatus({ loading: true });
      weatherAPI
        .getWeatherByCity(city)
        .then((response) => {
          console.log("weather res :: ", response);
          commit("getWeatherByCity", response.data);
        })
        .catch(() => updateErrorStatus({ error: true }))
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
  },
};

export default weatherModule;

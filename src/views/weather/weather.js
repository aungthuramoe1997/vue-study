import { onMounted, ref } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { URL } from "../../const/Constant";
export default {
  setup() {
    const store = useStore();
    const city = ref("yangon");

    onMounted(() => {
      searchWeatherByCity();
    });

    const searchWeatherByCity = () => {
      store.dispatch("weatherModule/getWeatherByCity", city.value);
    };

    let weather = computed(() => {
      return store.state.weatherModule.weather;
    });

    const weatherICON = computed(() => {
      if (store.state.weatherModule.weather.weather !== undefined) {
        return `${URL.WEATHER_ICON}${store.state.weatherModule.weather.weather[0].icon}@2x.png`;
      } else {
        return "";
      }
    });

    let searchKeyword = ref("");

    const searchCity = () => {
      console.log("city name ", searchKeyword.value);
      store.dispatch("weatherModule/getWeatherByCity", searchKeyword.value);
      searching.value = true;
      setTimeout(() => {
        searching.value = false;
      }, 2000);
    };

    const searching = ref(false);

    const cityNotFound = computed(() => {
      return store.state.weatherModule.weatherNotFound;
    });

    const clearSearch = () => {
      searchKeyword.value = "";
      // console.log("default weather ", defaultWeather);
    };

    const isDarkMode = computed(() => {
      return store.state.userModule.isDarkMode;
    });

    return {
      weather,
      searchWeatherByCity,
      weatherICON,
      searchKeyword,
      searchCity,
      searching,
      clearSearch,
      cityNotFound,
      isDarkMode,
    };
  },
};

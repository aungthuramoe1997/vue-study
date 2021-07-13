import { onMounted, ref, watch } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { URL } from "../../const/Constant";
import useCommon from "../../util/useCommon";
export default {
  setup() {
    const store = useStore();
    const city = ref("yangon");
    const { commonState, updateErrorStatus } = useCommon();

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
      store.dispatch("weatherModule/getWeatherByCity", searchKeyword.value);
    };

    const clearSearch = () => {
      searchKeyword.value = "";
    };

    const isDarkMode = computed(() => {
      return store.state.userModule.isDarkMode;
    });

    watch(
      () => {
        return { ...commonState };
      },
      (newValue) => {
        if (newValue.error === true) {
          setTimeout(() => {
            updateErrorStatus({ error: false });
          }, 4000);
        }
      }
    );

    return {
      weather,
      searchWeatherByCity,
      weatherICON,
      searchKeyword,
      searchCity,
      clearSearch,
      isDarkMode,
      commonState,
    };
  },
};

import MainContent from "./views/main-content/MainContent.vue";
import Login from "./views/auth/Login.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import useCommon from "./util/useCommon";

export default {
  name: "LayoutDefault",
  setup() {
    const store = useStore();
    const router = useRouter();
    const { commonState } = useCommon();
    let loginStatus = computed(() => {
      return store.state.userModule.isLoggin;
    });

    let isDarkMode = computed(() => {
      return store.state.userModule.isDarkMode;
    });
    const changeMode = () => {
      store.dispatch("userModule/changeMode", !isDarkMode.value);
    };

    const user = computed(() => {
      return store.state.userModule.authUser;
    });

    const title = ref("default");

    router.beforeEach((to) => {
      title.value = to.name;
    });

    const logout = () => {
      store.dispatch("userModule/logout", false);
      router.push({ name: "Login" });
    };

    return {
      leftDrawerOpen: ref(false),
      loginStatus,
      isDarkMode,
      changeMode,
      user,
      title,
      logout,
      commonState,
    };
  },
  components: {
    MainContent,
    Login,
  },
};

import { toRefs, reactive } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    //user
    const user = reactive({
      email: "",
      password: "",
    });

    //store
    const store = useStore();

    //router
    const router = useRouter();

    const loginStatus = computed(() => {
      return store.state.userModule.isLoggin;
    });

    //login
    const login = () => {
      console.log("user ", user);
      store.dispatch("userModule/login", user);
      if (loginStatus.value === true) {
        router.push({ name: "Weather" });
      }
    };

    const isDarkMode = computed(() => {
      return store.state.userModule.isDarkMode;
    });

    //Validation Rule
    // const rules = {
    //   email: { required, email },
    //   password: { required },
    // };

    //Validation Object Instance
    // const v$ = useVuelidate(rules, user);
    // console.log("initial v$ ", v$);

    //check login
    // const isLogin = computed(() => {
    //   return store.state.userModule.isLoggin;
    // });

    //Return Setup
    return {
      ...toRefs(user),
      login,
      isDarkMode,
    };
  },
};

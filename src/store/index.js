import { createStore } from "vuex";
import postModule from "./modules/post";
import userModule from "./modules/user";
import todoModule from "./modules/todo";
import weatherModule from "./modules/weather";
import commonModule from "./modules/common";

const store = createStore({
  modules: {
    postModule,
    userModule,
    todoModule,
    weatherModule,
    commonModule,
  },
});

export default store;

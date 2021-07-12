const commonModule = {
  namespaced: true,
  state: () => ({
    drawerState: false,
  }),
  mutations: {
    toggleSidebar(state, value) {
      state.drawerState = value;
    },
  },
  actions: {
    toggleSidebar({ commit }, value) {
      console.log("drawer state ", value);
      commit("toggleSidebar", value);
    },
  },
  getters: {},
};

export default commonModule;

import userAPI from "../../api/users/users";
const userModule = {
  namespaced: true,
  state: () => ({
    user: {},
    users: [],
    loginUser: [
      {
        email: "user@gmail.com",
        password: "user",
        name: "User",
        role: "user",
      },
      {
        email: "admin@gmail.com",
        password: "admin",
        name: "Admin User",
        role: "admin",
      },
    ],
    isLoggin: true,
    isDarkMode: false,
  }),
  mutations: {
    changeMode(state, dayOrNight) {
      state.isDarkMode = dayOrNight;
    },
    createUser(state, user) {
      state.users.push(user);
    },
    updateUser(state, user) {
      let index = state.users.findIndex(
        (searchUser) => searchUser.id === user.id
      );
      if (index !== -1) {
        state.users[index] = user;
      }
    },
    deleteUser(state, user) {
      let index = state.users.findIndex(
        (searchUser) => searchUser.id === user.id
      );
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    getUserList(state, users) {
      state.users.push(users);
    },
    getUserByID(state, user) {
      state.user = user;
    },
    login(state, user) {
      let index = state.loginUser.findIndex(
        (searchUser) =>
          searchUser.email === user.email &&
          searchUser.password === user.password
      );
      if (index !== -1) {
        state.isLoggin = true;
      }
    },
  },
  actions: {
    changeMode({ commit }, dayOrNight) {
      commit("changeMode", dayOrNight);
    },
    createUser({ commit }, user) {
      userAPI.createUser(user).then((response) => {
        console.log("users res :: ", response.data);
        commit("createUser", response.data);
      });
    },
    updateUser({ commit }, user) {
      userAPI.updateUser(user).then((response) => {
        console.log("users res :: ", response.data);
        commit("updateUser", user);
      });
    },
    deleteUser({ commit }, id) {
      userAPI.deleteUser(id).then((response) => {
        console.log("users res :: ", response.data);
        commit("deleteUser", id);
      });
    },
    getUserList({ commit }) {
      userAPI.getUserList().then((response) => {
        console.log("users res :: ", response.data);
        commit("getUserList", response.data);
      });
    },
    getUserByID({ commit }, id) {
      userAPI.getUserByID(id).then((response) => {
        console.log("users res :: ", response.data);
        commit("getUserByID", id);
      });
    },
    login({ commit }, user) {
      commit("login", user);
    },
  },
};

export default userModule;

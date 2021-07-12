import todoAPI from "../../api/todos/todos";
const todoModule = {
  namespaced: true,
  state: () => ({
    todos: [],
    todo: {},
  }),
  mutations: {
    createTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, todo) {
      let index = state.todos.findIndex(
        (searchTodo) => searchTodo.id === todo.id
      );
      if (index !== -1) {
        state.todos[index] = todo;
      }
    },
    deleteTodo(state, todo) {
      let index = state.todos.findIndex(
        (searchTodo) => searchTodo.id === todo.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    getTodoList(state, todos) {
      state.todos.push(todos);
    },
    getTodoByID(state, todo) {
      state.todo = todo;
    },
  },
  actions: {
    createTodo({ commit }, todo) {
      todoAPI.createTodo(todo).then((response) => {
        console.log("todos res :: ", response.data);
        commit("createTodo", response.data);
      });
    },
    updatetodo({ commit }, todo) {
      todoAPI.updateTodo(todo).then((response) => {
        console.log("todos res :: ", response.data);
        commit("updateTodo", todo);
      });
    },
    deletetodo({ commit }, id) {
      todoAPI.deleteTodo(id).then((response) => {
        console.log("todos res :: ", response.data);
        commit("deleteTodo", id);
      });
    },
    gettodoList({ commit }) {
      todoAPI.getTodoList().then((response) => {
        console.log("todos res :: ", response.data);
        commit("getTodoList", response.data);
      });
    },
    getTodoByID({ commit }, id) {
      todoAPI.getTodoByID(id).then((response) => {
        console.log("todos res :: ", response.data);
        commit("getTodoByID", id);
      });
    },
  },
};

export default todoModule;

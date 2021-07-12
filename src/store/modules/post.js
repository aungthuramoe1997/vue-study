import postAPI from "../../api/posts/posts";
const postModule = {
  namespaced: true,
  state: () => ({
    post: {},
    posts: [],
    loading: true,
  }),
  mutations: {
    createPost(state, post) {
      state.posts.push(post);
    },
    updatePost(state, post) {
      let index = state.posts.findIndex(
        (searchPost) => searchPost.id === post.id
      );
      if (index !== -1) {
        state.posts[index] = post;
      }
    },
    deletePost(state, id) {
      let index = state.posts.findIndex((searchpost) => searchpost.id === id);
      console.log("delete post index ", id);
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
    getPostList(state, posts) {
      state.posts = posts;
      state.loading = false;
    },
    getPostByID(state, post) {
      state.post = post;
    },
  },
  actions: {
    createPost({ commit }, post) {
      postAPI.createPost(post).then((response) => {
        console.log("posts res :: ", response.data);
        commit("createPost", response.data);
      });
    },
    updatePost({ commit }, post) {
      postAPI.updatePost(post).then((response) => {
        console.log("posts res :: ", response.data);
        commit("updatePost", post);
      });
    },
    deletePost({ commit }, id) {
      postAPI.deletePost(id).then((response) => {
        console.log("posts res :: ", response.data);
        commit("deletePost", id);
      });
    },
    getPostList({ commit }) {
      postAPI.getPostList().then((response) => {
        console.log("posts res :: ", response.data);
        commit("getPostList", response.data);
      });
    },
    getPostByID({ commit }, id) {
      postAPI.getPostByID(id).then((response) => {
        console.log("posts res :: ", response.data);
        commit("getPostByID", response.data);
      });
    },
  },
  getters: {
    loadingStatus(state) {
      return state.loading;
    },
  },
};

export default postModule;

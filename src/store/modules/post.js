import postAPI from "../../api/posts/posts";
import useCommon from "../../util/useCommon";
const { updateLoadingStatus, updateErrorStatus } = useCommon();
const postModule = {
  namespaced: true,
  state: () => ({
    post: {},
    posts: [],
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
    },
    getPostByID(state, post) {
      state.post = post;
    },
  },
  actions: {
    createPost({ commit }, post) {
      updateLoadingStatus({ loading: true });
      postAPI
        .createPost(post)
        .then((response) => {
          console.log("posts res :: ", response.data);
          updateLoadingStatus({ loading: false });
          commit("createPost", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        });
    },
    updatePost({ commit }, post) {
      updateLoadingStatus({ loading: true });
      postAPI
        .updatePost(post)
        .then((response) => {
          console.log("posts res :: ", response.data);
          updateLoadingStatus({ loading: false });
          commit("updatePost", post);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        });
    },
    deletePost({ commit }, id) {
      updateLoadingStatus({ loading: true });
      postAPI
        .deletePost(id)
        .then((response) => {
          console.log("posts res :: ", response.data);
          commit("deletePost", id);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    getPostList({ commit }) {
      updateLoadingStatus({ loading: true });
      postAPI
        .getPostList()
        .then((response) => {
          console.log("posts res :: ", response.data);
          commit("getPostList", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    getPostByID({ commit }, id) {
      updateLoadingStatus({ loading: true });
      postAPI
        .getPostByID(id)
        .then((response) => {
          console.log("posts res :: ", response.data);
          commit("getPostByID", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
  },
  getters: {},
};

export default postModule;

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref, toRefs, reactive, watch } from "vue";
import useCommon from "../../../util/useCommon";
export default {
  name: "Post List",
  setup() {
    const store = useStore();
    store.dispatch("postModule/getPostList");

    const { commonState, updateErrorStatus } = useCommon();

    let post = reactive({
      userId: 1,
      id: -1,
      title: "",
      body: "",
    });

    const columns = [
      {
        name: "userId",
        required: true,
        label: "User ID",
        align: "left",
        field: (row) => row.userId,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "id",
        align: "left",
        label: "ID",
        field: "id",
        sortable: true,
      },
      {
        name: "title",
        align: "left",
        label: "Post Title",
        field: "title",
        sortable: true,
      },
      {
        name: "body",
        align: "left",
        label: "Post Body",
        field: "body",
        sortable: true,
      },
    ];

    const posts = computed(() => {
      return store.state.postModule.posts;
    });

    const isDarkMode = computed(() => {
      return store.state.userModule.isDarkMode;
    });

    const user = computed(() => {
      return store.state.userModule.authUser;
    });

    const createPost = () => {
      if (post.title !== "" && post.body !== "") {
        post.id = posts.value.length + 1;
        store.dispatch("postModule/createPost", post);
        show.value = false;
      }
    };
    const updatePost = () => {
      store.dispatch("postModule/updatePost", post);
      show.value = false;
    };
    const deletePost = () => {
      store.dispatch("postModule/deletePost", deletePostID.value);
      showDelete.value = false;
    };

    const deletePostID = ref(-1);
    const showDialog = (action, editPost = undefined) => {
      if (action.delete === true) {
        showDelete.value = true;
        deletePostID.value = editPost.id;
      } else {
        show.value = true;
        if (action.edit && editPost !== undefined) {
          post.userId = editPost.userId;
          post.id = editPost.id;
          post.title = editPost.title;
          post.body = editPost.body;
        } else {
          post.title = "";
          post.body = "";
        }
        isEdit.value = action.edit;
      }
    };

    const show = ref(false);

    const isEdit = ref(false);

    watch(commonState.error, (newStatus) => {
      if (newStatus === true) {
        setTimeout(() => updateErrorStatus({ error: false }), 5000);
      }
    });

    const showDelete = ref(false);

    return {
      posts,
      columns,
      isDarkMode,
      user,
      show,
      showDelete,
      isEdit,
      commonState,
      createPost,
      updatePost,
      deletePost,
      showDialog,
      ...toRefs(post),
    };
  },
};

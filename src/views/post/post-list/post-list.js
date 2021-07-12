import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "Post List",
  setup() {
    const store = useStore();
    store.dispatch("postModule/getPostList");

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

    return {
      posts,
      columns,
      isDarkMode,
    };
  },
};

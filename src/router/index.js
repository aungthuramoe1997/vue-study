import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../views/post/post-list/PostList.vue"),
  },
  // {
  //   path: "/posts/create",
  //   name: "CreatePost",
  //   component: () => import("../views/post/create-post/CreatePost.vue"),
  // },
  // {
  //   path: "/posts/:id",
  //   name: "PostDetail",
  //   component: () => import("../views/post/post-detail/PostDetail.vue"),
  // },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/user/user-list/UserList.vue"),
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../views/todo/todo-list/TodoList.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () => import("../views/weather/Weather.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

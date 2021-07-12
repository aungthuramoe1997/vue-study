import axios from "axios";
import { URL } from "../../const/Constant";

const postAPI = {
  createPost,
  updatePost,
  deletePost,
  getPostList,
  getPostByID,
};

function createPost(post) {
  return axios.post(`${URL.BASE}posts`, post);
}

function updatePost(post) {
  return axios.put(`${URL.BASE}posts/${post.id}`, post);
}

function deletePost(id) {
  return axios.delete(`${URL.BASE}posts/${id}`);
}

function getPostList() {
  return axios.get(`${URL.BASE}posts`);
}

function getPostByID(id) {
  return axios.get(`${URL.BASE}posts/${id}`);
}

export default postAPI;

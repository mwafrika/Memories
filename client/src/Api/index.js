import axios from "axios";

const API = axios.create({ baseURL: "https://souvenir-01.herokuapp.com" });
export const fetchPosts = () => API.get("/posts");
export const createPost = (post) => API.post("/posts", post);
export const updatePost = (id, updatedPost) =>
  API.patch(`posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/like`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

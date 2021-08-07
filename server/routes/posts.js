import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  LikePost,
  getPostBySearch,
  getPost,
} from "../controllers/posts";
import auth from "../middleware/auth";

const router = Router()
  .get("/search", getPostBySearch)
  .get("/", getPosts)
  .get("/:id", getPost)
  .post("/", auth, createPost)
  .patch("/:id", auth, updatePost)
  .delete("/:id", auth, deletePost)
  .patch("/:id/like", auth, LikePost);

export default router;

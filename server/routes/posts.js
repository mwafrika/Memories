import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  LikePost,
} from "../controllers/posts";
const router = Router()
  .get("/", getPosts)
  .post("/", createPost)
  .patch("/:id", updatePost)
  .delete("/:id", deletePost)
  .patch("/:id/like", LikePost);

export default router;

import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/posts";
const router = Router()
  .get("/", getPosts)
  .post("/", createPost)
  .patch("/:id", updatePost)
  .delete("/:id", deletePost);

export default router;

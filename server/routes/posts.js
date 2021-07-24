import { Router } from "express";
import Posts from "../controllers/posts";
const router = Router();

router.get("/", Posts.getPost);
router.post("/", Posts.createPost);
export default router;

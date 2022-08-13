import express from "express";
//import controller
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

//routes

// GET posts
router.get("/", getPosts);

// POST posts
router.post("/", createPost);

// PUT posts

router.put("/:id", updatePost);

// DELETE posts
router.delete("/:id", deletePost);

export default router;

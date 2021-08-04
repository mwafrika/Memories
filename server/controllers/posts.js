import express from "express";
import mongoose from "mongoose";
import PostMessage from "../models/Post";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find().exec();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  const newPostMessage = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("No post found");
  const data = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(data);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("No post found");
  const data = await PostMessage.findByIdAndRemove(_id);
  res.json(data);
};

export const LikePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!req.userId) return res.status(401).json({ message: "unauthicated" });
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("No post found");
  const post = await PostMessage.findById(_id);

  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter(id !== String(req.userId));
  }
  const data = await PostMessage.findByIdAndUpdate(
    _id,
    // { likeCount: post.likeCount + 1 },
    post,
    { new: true }
  );
  res.json(data);
};

export default router;

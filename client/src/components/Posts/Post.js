import React from "react";
import Post from "./post/post";
import useStyle from "./post/styles";
import { useSelector } from "react-redux";
const Posts = () => {
  const classes = useStyle();
  const state = useSelector((state) => state.posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

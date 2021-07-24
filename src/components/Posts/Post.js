import React from "react";
import Post from "./post/post";
import useStyle from "./post/styles";

const Posts = () => {
  const classes = useStyle();
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

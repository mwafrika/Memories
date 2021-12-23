import React from "react";
import Post from "./post/post";
import useStyle from "./post/styles";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
  const classes = useStyle();
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts, "mwwafrika");
  if (!posts.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      spacing={3}
      alignItems="stretch"
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

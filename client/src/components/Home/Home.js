import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Post";
import Form from "../form/Form";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          spacing="3"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs="12" sm="7">
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs="12" sm="4">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

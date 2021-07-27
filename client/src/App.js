import React, { useEffect, useState } from "react";
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import souvenir from "./images/suse.png";
import Form from "./components/form/Form";
import Posts from "./components/Posts/Post";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Souvenir
        </Typography>
        <img
          className={classes.image}
          src={souvenir}
          alt="souvenire"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container maxWidth="lg">
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
    </Container>
  );
};

export default App;

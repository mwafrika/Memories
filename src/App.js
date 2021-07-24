import React from "react";
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import souvenir from "./images/suse.png";
import Form from "./components/form/Form";
import Posts from "./components/Posts/Post";
import useStyle from "./styles";

const App = () => {
  const classes = useStyle();
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
              <Posts />
            </Grid>
            <Grid item xs="12" sm="4">
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

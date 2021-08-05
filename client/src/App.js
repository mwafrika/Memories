import React from "react";
import { Container } from "@material-ui/core";
import useStyle from "./styles";
import AppBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/postDetails/PostDetails";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Router>
      <Container maxWidth="lg">
        <AppBar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route
            path="/Auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

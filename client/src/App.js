import React from "react";
import { Container } from "@material-ui/core";
import useStyle from "./styles";
import AppBar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <AppBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Auth" exact component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

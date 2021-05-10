import "./App.css";
import Home from "./components/home/Home";
import Service from "./components/services/service";
import Quid from "./components/identification/indentite";
import Contact from "./components/contact/contact";
import Rejoindre from "./components/rejoindre/rejoindre";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Service />
          </Route>
          <Route path="/identification">
            <Quid />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/rejoindre">
            <Rejoindre />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

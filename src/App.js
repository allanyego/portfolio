import React, { useEffect } from "react";
import * as eva from "eva-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

export default function App() {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <div className="page">
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/projects" exact component={Projects} />
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

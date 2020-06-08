import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Double from "./Double";
import Triple from "./Triple";


export default function App() {
  return (
    <Router>

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>

            {/*
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
            </Route>*/}

            <Route exact path="/" component={Home}/>
            <Route exact path="/double" component={Double}/>
            <Route exact path="/triple" component={Triple}/>

        </Switch>
    </Router>
  );
}
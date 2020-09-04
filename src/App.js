import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";

function App(props) {
  return (
    <section>
      <h2 align="center">Github Users</h2>
      <Router>
        <Switch>
          <Route path="/" exact component={UsersList} />
          <Route path="/user/:userId" component={UserDetails} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;

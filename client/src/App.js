import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import List from "./List";
import EditForm from "./EditForm";

export default function App() {
  return (
    <Router>
      <div>
        {/*<nav>
          <ul>
            <li>
                <Link to={`/`}>List</Link>
            </li>
            <li>
              <Link to={`/edit`}>Edit</Link>
            </li>
          </ul>
        </nav>*/}

        <Switch>
          <Route path="/edit/:id" >
            <EditForm />
          </Route>
          <Route exact path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
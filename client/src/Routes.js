import React, { Component } from "react";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import List from "./App";
import List from "./List";
import EditForm from "./EditForm";


export default class Routes extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route path="/">
                        <List />
                    </Route>
                    <Route path="/edit">
                        <EditForm />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
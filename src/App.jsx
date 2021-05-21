import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <>
            <Router basename="/shantymusic">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </>
    );
}

export default App;

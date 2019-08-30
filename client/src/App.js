import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import LandingPage from "./views/examples/LandingPage";

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                render={props => <LandingPage {...props} exact/>}
            />
            <Redirect to="/" />
        </Switch>
    );
};

export default App;

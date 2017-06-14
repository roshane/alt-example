import React from 'react';
import {Route,Redirect} from 'react-router';
import AltContainer from 'alt-container';

import Alt from './Alt';
import App from './Main/App';
import About from './Main/About';
import Layout from './Main/Layout';
import Login from './Main/Login';

let routes = (
    <Route>
        <Redirect from="/" to="/Login"/>
        <Route path="/index" name="index" component={Layout}>
            <Route path="/login" name="login" component={Login}/>
            <Route path="/home" name="home" component={App}/>
            <Route path="/about" name="about" component={About}/>
        </Route>
    </Route>
);

export default routes;

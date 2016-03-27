import React from 'react';
import {Route,Redirect} from 'react-router';
import AltContainer from 'alt-container';

import Alt from './Alt';
import App from './Main/App';
import About from './Main/About';
import Layout from './Main/Layout';

let routes = (
    <Route>
        <Redirect from="/" to="/home"/>
        <Route path="/index" name="index" component={Layout}>
            <Route path="/home" name="home" component={App}/>
            <Route path="/about" name="about" component={About}/>
        </Route>
    </Route>
);

export default routes;

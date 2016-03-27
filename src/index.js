import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main/App';
import {Router,browserHistory} from 'react-router';

import routes from './Route';


ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('root'));
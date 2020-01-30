import ReactDOM from 'react-dom';
import React from 'react';

import createHistory from 'history/createBrowserHistory';
import App from './App';

const history = createHistory();

ReactDOM.render((
    <App />
    ), document.getElementById('root'));

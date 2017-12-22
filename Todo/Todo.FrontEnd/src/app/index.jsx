import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import browserHistory from 'react-router/lib/browserHistory';

import 'babel-polyfill';

import routes from './routes';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>, document.getElementById('todoContainer'));

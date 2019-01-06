import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduser from './redusers';
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import routes from './options/routes';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { apiMiddleware } from 'redux-api-middleware';

const middlewares = [
    thunk,
    apiMiddleware
];

const store = createStore(
    reduser,
    composeWithDevTools(applyMiddleware(...middlewares))
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
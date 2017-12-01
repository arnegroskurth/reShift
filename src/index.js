import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware/*, push*/ } from 'react-router-redux'
import employees from './reducers/Employees'
import AppComponent from './components/App'
import './index.css'

// load persisted state from localStorage
const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const history = createHistory();
const store = createStore(
    combineReducers({
        employees,
        routing: routerReducer,
    }),
    persistedState,
    applyMiddleware(routerMiddleware(history))
);

// persist state on each action
store.subscribe(() => {

    localStorage.setItem('state', JSON.stringify(store.getState()));
});

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppComponent/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

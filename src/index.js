import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware/*, push*/ } from 'react-router-redux'
import employees from './reducers/Employees';
import AppComponent from './components/App'
import './index.css'

const history = createHistory();
const store = createStore(
    combineReducers({
        employees,
        routing: routerReducer,
    }),
    applyMiddleware(routerMiddleware(history))
);

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

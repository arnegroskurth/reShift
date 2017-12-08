import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware/*, push*/ } from 'react-router-redux'
import employees from './reducers/Employees'
import eventOverlay from './reducers/EventOverlay';
import events from './reducers/Events';
import AppComponent from './components/App'
import registerServiceWorker from './registerServiceWorker'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/de'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import './index.css'

import 'react-big-calendar/lib/css/react-big-calendar.css'


// init big calendar lib
BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

// load persisted state from localStorage
const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const history = createHistory();
const store = createStore(
    combineReducers({
        employees,
        eventOverlay,
        events,
        routing: routerReducer,
    }),
    persistedState,
    applyMiddleware(routerMiddleware(history))
);

// persist state on each action
store.subscribe(() => {

    localStorage.setItem('state', JSON.stringify(store.getState()));

    console.log(store.getState());
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
registerServiceWorker();

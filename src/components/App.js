import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import EmployeeListContainer from '../containers/EmployeeList'

const AppComponent = () => (
    <div className="container">
        <div className="page-header">
            <h1>Dienstplaner</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/employees">Employees</Link></li>
            </ul>
        </div>
        <div className="panel panel-default">
            <div className="panel-body">
                <Switch>
                    <Route exact path="/" render={() => (
                        <h2>Home</h2>
                    )}/>
                    <Route exact path="/employees" component={EmployeeListContainer} />
                </Switch>
            </div>
        </div>
    </div>
);

AppComponent.propTypes = {

};

export default AppComponent;

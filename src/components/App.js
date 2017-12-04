import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'
import EmployeeListContainer from '../containers/EmployeeList'

const AppComponent = () => (
    <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <h1>Dienstplaner</h1>
                <Nav bsStyle="tabs">
                    <IndexLinkContainer to="/">
                        <NavItem>Dienstplan</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/employees">
                        <NavItem>Mitarbeiter</NavItem>
                    </IndexLinkContainer>
                </Nav>

            </div>
        </div>
        <Switch>
            <Route exact path="/" render={() => (
                <h2>Home</h2>
            )}/>
            <Route exact path="/employees" component={EmployeeListContainer} />
        </Switch>
    </div>
);

AppComponent.propTypes = {

};

export default AppComponent;

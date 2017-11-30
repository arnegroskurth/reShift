import React from 'react'
import PropTypes from 'prop-types';

const EmployeeListComponent = (employees, onAddEmployee) => {

    let name = '';

    return (
        <div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Name..." onChange={(e) => name = e.target.value} />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={() => onAddEmployee(name)}>Add</button>
                </span>
            </div>
            <ul>
                {employees.length ? employees.map((employee) => (
                    <li>{employee.name}</li>
                )) : ''}
            </ul>
        </div>
    );
};

EmployeeListComponent.propTypes = {
    employees: PropTypes.array.isRequired,
};

export default EmployeeListComponent;

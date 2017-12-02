import React from 'react'
import PropTypes from 'prop-types'

const EmployeeListComponent = ({employees, onAddEmployee, onRemoveEmployee}) => (
    <div>
        <form onSubmit={onAddEmployee}>
            <div className="input-group">
                <input type="text" name="name" className="form-control" placeholder="Name..." />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Add</button>
                </span>
            </div>
        </form>
        <ul>
            {employees.length ? employees.map((employee) => (
                <li key={employee.id} id={employee.id}>
                    #{employee.id} - {employee.name}
                    <span className="pull-right" onClick={onRemoveEmployee}>x</span>
                </li>
            )) : ''}
        </ul>
    </div>
);

EmployeeListComponent.propTypes = {
    employees: PropTypes.array.isRequired,
    onAddEmployee: PropTypes.func.isRequired,
};

export default EmployeeListComponent;

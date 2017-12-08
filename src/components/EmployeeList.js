import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap'

const EmployeeListComponent = ({employees, onAddEmployee, onRemoveEmployee}) => (
    <div>
        <form onSubmit={onAddEmployee}>
            <div className="row">
                <div className="col-md-6 pull-right">
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" name="name" placeholder="Name..." />
                            <InputGroup.Button>
                                <Button type="submit">
                                    <i className="glyphicon glyphicon-plus" />
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </div>
            </div>
        </form>
        <table className="table table-hover table-responsive">
            <thead>
                <tr>
                    <th width="1">&nbsp;</th>
                    <th>Name</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {employees.length ? employees.map((employee) => (
                    <tr key={employee.id} id={employee.id}>
                        <td>
                            <span className="badge" style={{backgroundColor: employee.color}}>&nbsp;</span>
                        </td>
                        <td>
                            {employee.name}
                        </td>
                        <td>
                            <Button bsStyle="danger" bsSize="xsmall" className="pull-right" onClick={onRemoveEmployee}>
                                <i className="glyphicon glyphicon-trash" />
                            </Button>
                        </td>
                    </tr>
                )) :
                    <tr>
                        <td colSpan="3">
                            <em>Keine Einträge</em>
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    </div>
);

EmployeeListComponent.propTypes = {
    employees: PropTypes.array.isRequired,
    onAddEmployee: PropTypes.func.isRequired,
};

export default EmployeeListComponent;

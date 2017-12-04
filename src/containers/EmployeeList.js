import { connect } from 'react-redux'
import { addEmployee, removeEmployee } from '../actions/index'
import EmployeeListComponent from '../components/EmployeeList'

const mapStateToProps = (state) => {

    return {
        employees: state.employees,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        onAddEmployee: (e) => {

            e.preventDefault();

            let nameInput = e.target.elements.namedItem('name');
            let action = addEmployee(nameInput.value);

            if (!nameInput.value) return;

            nameInput.value = '';

            dispatch(action);
        },

        onRemoveEmployee: (e) => {

            let employeeId = parseInt(e.currentTarget.parentElement.parentElement.getAttribute('id'), 10);

            dispatch(removeEmployee(employeeId));
        }
    };
};

const EmployeeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EmployeeListComponent);

export default EmployeeListContainer;

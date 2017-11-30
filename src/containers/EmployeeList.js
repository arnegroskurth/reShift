import { connect } from 'react-redux'
import { addEmployee } from '../actions/index'
import EmployeeListComponent from '../components/EmployeeList'

const mapStateToProps = (state) => {

    return {
        employees: state.employees,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        onAddEmployee: (name) => {dispatch(addEmployee(name))},
    };
};

const EmployeeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EmployeeListComponent);

export default EmployeeListContainer;

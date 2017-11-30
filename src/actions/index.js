
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

let nextEmployeeId = 1;

export const addEmployee = (name) => {

    return {
        type: ADD_EMPLOYEE,
        id: nextEmployeeId++,
        name
    };
};

export const removeEmployee = (id) => {

    return {
        type: REMOVE_EMPLOYEE,
        id
    };
};

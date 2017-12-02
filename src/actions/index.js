
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

export const addEmployee = (name) => {

    return {
        type: ADD_EMPLOYEE,
        name
    };
};

export const removeEmployee = (id) => {

    return {
        type: REMOVE_EMPLOYEE,
        id
    };
};

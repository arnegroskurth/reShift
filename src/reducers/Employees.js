
import {ADD_EMPLOYEE, REMOVE_EMPLOYEE} from '../actions/index';

export default (state = [], action) => {

    switch (action.type)
    {
        case ADD_EMPLOYEE:

            const maxId = state.reduce((acc, curr) => (acc > curr.id) ? acc : curr.id, 0);

            return [
                ...state,
                {
                    id: maxId + 1,
                    name: action.name,
                }
            ];

        case REMOVE_EMPLOYEE: return state.filter((employee) => {

            return employee.id !== action.id;
        });

        default: break;
    }

    return state;
};

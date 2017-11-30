
import {ADD_EMPLOYEE, REMOVE_EMPLOYEE} from '../actions/index';

export default (state = [], action) => {

    switch (action.type)
    {
        case ADD_EMPLOYEE: return [
            ...state,
            {
                id: action.id,
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

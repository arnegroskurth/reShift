
import {ADD_EMPLOYEE, REMOVE_EMPLOYEE} from '../actions/index';
import colorSchema from '../color-schema'

export default (state = [], action) => {

    switch (action.type)
    {
        case ADD_EMPLOYEE:

            const maxId = state.reduce((acc, curr) => (acc > curr.id) ? acc : curr.id, 0);
            const takenColors = state.length ? state.map(employee => employee.color) : [];
            const unusedColors = colorSchema.filter(color => !takenColors.includes(color));

            // choose unused color or fall back to already taken color
            const color = unusedColors.length ? unusedColors[0] : takenColors[0];

            return [
                ...state,
                {
                    id: maxId + 1,
                    name: action.name,
                    color: color,
                }
            ];

        case REMOVE_EMPLOYEE: return state.filter((employee) => {

            return employee.id !== action.id;
        });

        default: break;
    }

    return state;
};

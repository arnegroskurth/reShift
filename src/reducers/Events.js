import {REMOVE_EVENT, SAVE_EVENT} from "../actions";

export default (state = [], action) => {

    switch (action.type)
    {
        case SAVE_EVENT:

            // save an existing event by replacing it
            if (action.event.id)
            {
                return state.map((event) => (event.id === action.event.id) ? action.event : event);
            }

            // save a new event by calculating a new id and appending it
            else
            {
                const maxId = state.reduce((acc, curr) => (acc > curr.id) ? acc : curr.id, 0);

                return [
                    ...state,
                    Object.assign({}, action.event, {
                        id: maxId + 1,
                    }),
                ];
            }

        case REMOVE_EVENT:

            return state.filter((event) => event.id !== action.id);

        default: break;
    }

    return state;
};

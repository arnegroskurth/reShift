
import {SELECT_SLOT} from "../actions/index";
import {CLOSE_EVENT_OVERLAY, SAVE_EVENT, SELECT_EVENT} from "../actions";

const initialState = {
    showOverlay: false,
    event: {
        id: null,
        type: null,
        from: null,
        to: null,
        employee: null,
    },
};

export default (state = initialState, action) => {

    switch (action.type)
    {
        case SELECT_SLOT:

            return {
                ...initialState,
                shown: true,
                event: {
                    from: action.from,
                    to: action.to,
                },
            };

        case SELECT_EVENT:

            const selectedEvent = action.event;

            return {
                ...initialState,
                shown: true,
                event: {
                    id: selectedEvent.id,
                    type: selectedEvent.type,
                    from: selectedEvent.from,
                    to: selectedEvent.to,
                    employee: selectedEvent.employee,
                },
            };

        case SAVE_EVENT:
        case CLOSE_EVENT_OVERLAY:

            return {
                ...state,
                shown: false,
            };

        default: break;
    }

    return state;
};

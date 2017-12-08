
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

export const SAVE_EVENT = 'SAVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const SELECT_EVENT = 'SELECT_EVENT';
export const SELECT_SLOT = 'SELECT_SLOT';
export const CLOSE_EVENT_OVERLAY = 'CLOSE_EVENT_OVERLAY';


export const addEmployee = (name) => {

    return {
        type: ADD_EMPLOYEE,
        name,
    };
};

export const removeEmployee = (id) => {

    return {
        type: REMOVE_EMPLOYEE,
        id,
    };
};

export const saveEvent = (id, employee, eventType, from, to) => {

    return {
        type: SAVE_EVENT,
        event: {
            id,
            type: eventType,
            employee,
            from,
            to,
        },
    };
};

export const selectSlot = (from, to) => {

    return {
        type: SELECT_SLOT,
        from,
        to,
    };
};

export const selectEvent = (event) => {

    return {
        type: SELECT_EVENT,
        event,
    };
};

export const removeEvent = (id) => {

    return {
        type: REMOVE_EVENT,
        id,
    };
};

export const closeEventOverlay = () => {

    return {
        type: CLOSE_EVENT_OVERLAY,
    };
};

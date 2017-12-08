
import { connect } from 'react-redux';
import ScheduleComponent from '../components/Schedule';
import {saveEvent, closeEventOverlay, selectEvent, selectSlot} from '../actions';

const mapStateToProps = (state) => {

    const events = state.events.map(event => {

        const employee = state.employees.find(employee => employee.id === event.employee);

        const ret = Object.assign({}, event, {
            title: event.type,
            start: new Date(),
            end: new Date(),
            color: employee.color,
        });

        ret.start.setTime(event.from);
        ret.end.setTime(event.to);

        return ret;
    });

    return {
        employees: state.employees,
        eventOverlay: state.eventOverlay,
        events,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        onSelectSlot: (slotInfo) => {

            return dispatch(
                selectSlot(slotInfo.start.getTime(), slotInfo.end.getTime())
            );
        },

        onSelectEvent: (eventInfo) => {

            const event = (({id, type, from, to, employee}) => ({id, type, from, to, employee}))(eventInfo);

            dispatch(selectEvent(event));
        },

        saveEvent: (e) => {

            e.preventDefault();

            const formElements = e.currentTarget.elements;

            const idString = formElements.namedItem('id').value;
            const fromString = formElements.namedItem('from').value;
            const toString = formElements.namedItem('to').value;

            return dispatch(saveEvent(
                idString ? parseInt(idString, 10) : null,
                parseInt(formElements.namedItem('employee').value, 10),
                formElements.namedItem('type').value,
                (new Date(fromString)).getTime(),
                (new Date(toString)).getTime()
            ));
        },

        closeEventOverlay: () => dispatch(closeEventOverlay()),
    };
};

const ScheduleContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScheduleComponent);

export default ScheduleContainer;

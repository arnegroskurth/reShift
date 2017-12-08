import React from 'react';
import BigCalendar from 'react-big-calendar';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Modal } from 'react-bootstrap';
import { EventTypes } from "../event-types";

const formatDateForInput = (timestamp) => {

    const date = new Date(timestamp);

    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
};

const FieldGroup = ({ id, type, label, help, ...props }) => (
    <FormGroup controlId={id}>
        <Col componentClass={ControlLabel} sm={2}>{label}</Col>
        <Col sm={10}>
            {(type === 'select') ? (
                <FormControl componentClass="select" {...props}>
                    {props.children}
                </FormControl>
            ) : (
                <FormControl type={type} {...props} />
            )}
            {help && <HelpBlock>{help}</HelpBlock>}
        </Col>
    </FormGroup>
);

class Event extends React.Component
{
    render()
    {
        return (
            <div style={{backgroundColor: this.props.event.color}} id={this.props.event.id} className="event-wrapper">
                {this.props.children}
            </div>
        );
    }
}

const ScheduleComponent = ({employees, eventOverlay, events, onSelectEvent, onSelectSlot, closeEventOverlay, removeEvent, saveEvent}) => (
    <div>
        <div style={{height: '40em'}}>
            <BigCalendar
                events={events}
                views={['month']}
                selectable
                popup={true}
                culture="de"
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                components={{
                    eventWrapper: Event
                }}
            />
        </div>
        <div className="employee-list">
            {employees.length ? employees.map(employee => (
                <span key={employee.id} className="label" style={{backgroundColor: employee.color}}>
                    {employee.name}
                </span>
            )) : ''}
        </div>
        <Modal show={eventOverlay.shown} onHide={closeEventOverlay}>
            <Form onSubmit={saveEvent} horizontal>
                <input type="hidden" name="id" value={eventOverlay.event.id} />
                <Modal.Header closeButton>
                    <Modal.Title>
                        {eventOverlay.event.id ? (
                            <span>Ereignis bearbeiten</span>
                            ) : (
                            <span>Neues Ereignis anlegen</span>
                        )}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FieldGroup id="event-type-select" type="select" name="type" label="Typ" defaultValue={eventOverlay.event.type} required>
                        <option />
                        {EventTypes.map((eventType, id) => (
                            <option key={id} value={eventType.type}>{eventType.name}</option>
                        ))}s
                    </FieldGroup>
                    <FieldGroup id="event-employee-select" type="select" name="employee" label="Mitarbeiter" defaultValue={eventOverlay.event.employee} required>
                        <option />
                        {employees.map(employee => (
                            <option key={employee.id} value={employee.id}>{employee.name}</option>
                        ))}
                    </FieldGroup>
                    <FieldGroup id="event-from-input" type="date" name="from" label="Von" defaultValue={eventOverlay.event.from ? formatDateForInput(eventOverlay.event.from) : ''} required />
                    <FieldGroup id="event-to-input" type="date" name="to" label="Bis" defaultValue={eventOverlay.event.to ? formatDateForInput(eventOverlay.event.to) : ''} required />
                </Modal.Body>
                <Modal.Footer>
                    {eventOverlay.event.id ? (
                        <Button onClick={removeEvent} bsStyle="danger" className="pull-left">Löschen</Button>
                    ) : ''}
                    <Button onClick={closeEventOverlay}>Abbrechen</Button>
                    <Button type="submit" bsStyle="primary">Speichern</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </div>
);

export default ScheduleComponent;

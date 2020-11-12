import React, { Component } from 'react';

import './modal.scss';
import { getDateTime } from '../../utils/dateUtils.js';
import { createEvent, getEventsList } from '../../gateway/events.js';
import PropTypes from 'prop-types';


class Modal extends Component {
    state = {
        event: {
            title: '',
            description: '',
            date: null,
            startTime: null,
            endTime: null
        }
    };

    handleChange = event => {
        const { name } = event.target;

        this.setState({
            event: {
                ...this.state.event,
                [name] : event.target.value
            }
        });
    }
    

    handleEventCreate = () => {
        const dateFrom = getDateTime(this.state.event.date, this.state.event.startTime),
            dateTo = getDateTime(this.state.event.date, this.state.event.endTime);

        const formattedEventDate = {
            title: this.state.event.title,
            description: this.state.event.description,
            dateFrom: dateFrom,
            dateTo: dateTo
        };

        this.setState({
            event: formattedEventDate
        });

        alert(createEvent(this.state.event).then(() => 
            getEventsList()));
    }

    render() {

        return (
            <div className="modal overlay">
                <div className="modal__content">
                    <div className="create-event">
                        <button 
                            className="create-event__close-btn" 
                            onClick={() => this.props.closeEventWindow()}>
                               +
                        </button>
                        <form className="event-form">
                            <input 
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="event-form__field"
                                onChange={this.handleChange}
                            />
                            <div className="event-form__time">
                                <input 
                                    type="date" 
                                    name="date" 
                                    className="event-form__field"
                                    onChange={this.handleChange}
                                />
                                <input 
                                    type="time"
                                    name="startTime"
                                    className="event-form__field"
                                    onChange={this.handleChange}
                                />
                                <span>-</span>
                                <input 
                                    type="time"
                                    name="endTime"
                                    className="event-form__field"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <textarea 
                                name="description"
                                placeholder="Description"
                                className="event-form__field"
                                onChange={this.handleChange}>
                            </textarea>
                            <button 
                                type="submit" 
                                className="event-form__submit-btn" 
                                onClick={this.handleEventCreate}>
                                    Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>)
    }
}

export default Modal;

Modal.propTypes = {
    closeEventWindow: PropTypes.func,
    onEventCreate: PropTypes.func
};
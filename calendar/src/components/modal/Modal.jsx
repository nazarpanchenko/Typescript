import React, { Component } from 'react';

import './modal.scss';
import validator, { date, isEventValid, isTitleValid, isDateValid } from '../../utils/validators.js';
import PropTypes from 'prop-types';

class Modal extends Component {
    state = {
        event: {
            title: '',
            description : '',
            date: null,
            startTime: null,
            endTime: null
        },
        validator: validator,
        canSubmit: false
    };

    componentWillUnmount() {
        this.clearForm();
    }

    clearForm = () => {
        this.setState({
            event: {},
            validator: {},
            canSubmit: false
        });
    }

    checkValidity = () => {
        if (isEventValid(this.state.validator)) {
            this.setState({
                canSubmit: true
            });
        }
    }

    handleTitleChange = event => {
        const { name, value } = event.target;
        const newEvent = {
            ...this.state.event,
            [name] : value
        };

        if (isTitleValid(newEvent.title)) {
            this.setState({
                event: newEvent,
                validator: {
                    ...this.state.validator,
                    title: true
                }
            });
        } else {
            this.setState({
                validator: {
                    ...this.state.validator,
                    title: false
                }
            });
        }

        this.checkValidity();
    }
    
    handleDateChange = event => {
        const { name, value } = event.target;
        const newEvent = {
            ...this.state.event,
            [name] : value
        };

        if (isDateValid(newEvent)) {
            this.setState({
                event: newEvent,
                validator: {
                    ...this.state.validator,
                    date: true,
                    startTime: true,
                    endTime: true
                }
            });
        } else {
            this.setState({
                validator: {
                    ...this.state.validator,
                    date: false,
                    startTime: false,
                    endTime: false
                }
            });
        }

        this.checkValidity();
    }

    handleTextChange = event => {
        const { name, value } = event.target;
        const newEvent = {
            ...this.state.event,
            [name] : value
        };
        this.setState({
            event: newEvent
        });
    }

    handleEventCreate = event => {
        event.preventDefault();
        this.props.onEventCreate(this.state.event);
        this.clearForm();

        try {
            if (isEventValid(event)) {
                this.props.onEventCreate(this.state.event);
                this.clearForm();
            }
        } catch(err) {
            alert(err.message);
        }
    }

    render() {
        const { canSubmit } = this.state;
        const { closeEventWindow } = this.props;

        return (
            <div className="modal overlay">
                <div className="modal__content">
                    <div className="create-event">
                        <button 
                            className="create-event__close-btn" 
                            onClick={() => closeEventWindow()}>
                            +
                        </button>
                        <form className="event-form">
                            <input type="text"
                                name="title"
                                placeholder="Title"
                                className="event-form__field"
                                onChange={this.handleTitleChange}
                            />
                            <div className="event-form__time">
                                <input type="date"
                                    defaultValue={date.date}
                                    name="date"
                                    className="event-form__field"
                                    onChange={this.handleDateChange}
                                />
                                <input type="time"
                                    defaultValue={`${date.hours}:${date.minutes}`}
                                    name="startTime"
                                    className="event-form__field"
                                    onChange={this.handleDateChange}
                                />
                                <span>-</span>
                                <input type="time"
                                    defaultValue={`${date.hours}:${date.minutes}`}
                                    name="endTime"
                                    className="event-form__field"
                                    onChange={this.handleDateChange}
                                />
                            </div>
                            <textarea name="description"
                                placeholder="Description"
                                className="event-form__field"
                                onChange={this.handleTextChange}>
                            </textarea>
                            <button type="submit"
                                className="event-form__submit-btn" 
                                onClick={this.handleEventCreate}
                                disabled={!canSubmit}>
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;

Modal.propTypes = {
    closeEventWindow: PropTypes.func,
    onEventCreate: PropTypes.func,
    isEventValid: PropTypes.func
};

// if (titleNotEmpty(newEvent.title)) {
    //     this.setState({
    //         event: newEvent,
    //         canSubmit: true
    //     });
    // } else {
    //     this.setState({
    //         canSubmit: false
    //     });
    // }
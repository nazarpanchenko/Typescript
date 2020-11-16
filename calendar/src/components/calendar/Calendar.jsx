import React, { Component } from 'react';

import Modal from '../modal/Modal';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import events, { getEventsList, createEvent } from '../../gateway/events.js';
import { getDateTime } from '../../utils/dateUtils.js';
import './calendar.scss';
import PropTypes from 'prop-types';
import EventContext from '../../EventContext';

class Calendar extends Component {

    state = {
        events
    };

    componentDidMount() {
       this.fetchEvents();
    }

    fetchEvents = () => {
        getEventsList().then(eventsList => {
            this.setState({
                events: eventsList
            });
        });
    }

    onEventCreate = event => {
        const { title, description, dateFrom, dateTo } = this.formatEventDate(event);
        const newEvent = {
            title, 
            description, 
            dateFrom, 
            dateTo
        };

        createEvent(newEvent).then(() => this.fetchEvents());
    }

    formatEventDate = event => {
        const { title, description, date, startTime, endTime } = event;

        return {
            title: title,
            description: description,
            dateFrom: getDateTime(date, startTime),
            dateTo: getDateTime(date, endTime)
        };
    }

    render() {
        const { weekDates, closeEventWindow, isModalOpen, weekStartDate } = this.props;

        const events = {
            eventsList: this.state.events,
            fetchEvents: this.fetchEvents
        };

        return (
            <section className="calendar">
                {isModalOpen 
                    ? <Modal 
                        onEventCreate={this.onEventCreate}
                        closeEventWindow={closeEventWindow}
                    />
                    : null
                }
                <Navigation weekDates={weekDates} />
                <div className="calendar__body">
                    <div className="calendar__week-container">
                        <Sidebar />
                        <EventContext.Provider value={events}>
                            <Week
                                weekDates={weekDates}
                                events={this.state.events}
                            />
                        </EventContext.Provider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Calendar;

Calendar.propTypes = {
    weekDates: PropTypes.array,
    isModalOpen: PropTypes.bool
};

Calendar.defaultProps = {
    weekDates: [],
    isModalOpen: false
};
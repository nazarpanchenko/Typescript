import React, { Component } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events, { getEventsList } from '../../gateway/events.js';

import './calendar.scss';
import PropTypes from 'prop-types';

class Calendar extends Component {

    state = {
        events
    };

    componentDidMount() {
       getEventsList();
    }

    render() {
        const { weekDates } = this.props;

        return (
            <section className="calendar">
                <Navigation weekDates={weekDates} />
                <div className="calendar__body">
                    <div className="calendar__week-container">
                        <Sidebar />
                        <Week weekDates={weekDates} events={this.state.events} />
                    </div>
                </div>
            </section>
        )
        
    }
}

export default Calendar;

Calendar.propTypes = {
    weekDates: PropTypes.array,
    events: PropTypes.array
};

Calendar.defaultProps = {
    weekDates: [],
    events: []
};
import React from 'react';

import './event.scss';
import PropTypes from 'prop-types';

const Event = ({ height, marginTop, title, time }) => {

    const eventStyle = {
        height,
        marginTop
    };

    return (
        <div style={eventStyle} className="event">
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
        </div>
    )
}


export default Event;

Event.propTypes = {
    height: PropTypes.string,
    marginTop: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.date
};

Event.defaultProps = {
    height: '',
    marginTop: '',
    title: '',
    time: new Date()
};
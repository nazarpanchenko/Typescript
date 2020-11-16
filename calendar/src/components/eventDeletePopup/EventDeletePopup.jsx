import React, { useState } from 'react';
import './eventDeletePopup.scss';
import PropTypes from 'prop-types';
import { getEventsList, deleteEvent } from '../../gateway/events.js';

const EventDeletePopup = ({ eventId, fetchEvents }) => {
    const [id, setId] = useState(null);

    const onDelete = () => {
        deleteEvent(eventId).then(() => getEventsList())
            .then(eventsList => fetchEvents());
    };

    return (
        <div className="popup">
            <button type="button"
                className="popup__delete-btn"
                onClick={() => {
                    setId(eventId);
                    onDelete();
                }}>

                <i className="fa fa-trash" aria-hidden="true"></i>
                Delete
            </button>
        </div>
    );
}

export default EventDeletePopup;

PropTypes.defaultTypes = {
    eventId: PropTypes.string
};
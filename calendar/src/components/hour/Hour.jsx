import React from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import PropTypes from 'prop-types';
import './hour.scss';

const Hour = ({ dataHour, hourEvents }) => {

    return (
        <div className="calendar__time-slot" data-time={dataHour + 1}>
            {/* if no events in the current hour nothing will render here */}
            {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
                const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
                const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

                return (
                    <Event
                        key={id}
                        eventId={id}
                        //calculating event height = duration of event in minutes
                        height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
                        marginTop={dateFrom.getMinutes()}
                        time={`${eventStart} - ${eventEnd}`}
                        title={title}
                        description={description}
                    />
                )
            })}
        </div>
    )
}

export default Hour;

Hour.propTypes = {
    dataHour: PropTypes.number,
    hourEvents: PropTypes.array
};

Hour.defaultProps = {
    dataHour: 1,
    hourEvents: []
};
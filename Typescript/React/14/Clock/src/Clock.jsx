import React, { useState, useEffect } from 'react';

const Clock = ({ location, offset }) => {
    const getTimeWithOffset = offset => {
        const currentTime = new Date();
        const utcOffset = currentTime.getTimezoneOffset() / 60;
        
        return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
    };

    const [time, setTime] = useState(getTimeWithOffset(offset));

    let interval;

    useEffect(() => {
        interval = setInterval(() => {
            setTime(getTimeWithOffset(offset));
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [time]);

    return (
        <div className="clock">
            <div className="clock__location">
                {location}
            </div>
            <div className="clock__time">
                {time.toLocaleTimeString()}
            </div>
        </div>
    );
}

export default Clock;
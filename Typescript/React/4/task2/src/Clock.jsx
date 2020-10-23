import React, { Component } from 'react';
import './clock.scss';
import moment from "moment";
import momentTimezone from "moment-timezone";

let location, offset;

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location : props.location,
            offset : moment(getTimeWithOffset(props.offset)).format('h:mm:ss A')
        };

        setInterval(() => {
            this.setState({
                offset : moment(getTimeWithOffset(props.offset)).format('h:mm:ss A')
            });
        }, 1000);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">
                    {this.state.location}
                </div>
                <div className="clock__time">
                    {this.state.offset}
                </div>
            </div>
        );
    }
}

export default Clock;

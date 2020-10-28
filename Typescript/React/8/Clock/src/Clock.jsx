import React, { Component } from 'react';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset : getTimeWithOffset(this.props.offset)
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                offset : getTimeWithOffset(this.props.offset)
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">
                    {this.props.location}
                </div>
                <div className="clock__time">
                    {this.state.offset.toLocaleTimeString()}
                </div>
            </div>
        );
    }
}

export default Clock;

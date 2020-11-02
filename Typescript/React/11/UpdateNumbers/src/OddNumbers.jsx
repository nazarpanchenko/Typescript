import React, { Component } from 'react';

class Oddumbers extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.number % 2 === 1;
    }

    render() {
        return (
            <div className="number">
                <span className="number__title">
                    {this.props.title}
                </span>
                <span className="number__number">
                    {this.props.number}
                </span>
            </div>
        );
    }
}

export default OddNumbers;
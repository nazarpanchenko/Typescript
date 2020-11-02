import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class Numbers extends PureComponent {
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

Numbers.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number.isRequired
};

Numbers.defaultProps = {
    title: 'Some number'
};

export default Numbers;
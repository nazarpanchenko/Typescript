import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
    state = {
        isShown : false
    };

    handleDisplay = () => {
        this.setState({
            isShown : !this.state.isShown
        });
    }

    render() {
        const ARROW_ICON = !this.state.isShown ? "fas fa-chevron-down" : "fas fa-chevron-up";

        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button className="expand__toggle-btn" onClick={this.handleDisplay}>
                       <i className={ARROW_ICON} />
                    </button>
                </div>
                {!this.state.isShown ? null : this.props.children}
            </div>
        );
    }
}

Expand.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired
};
Expand.defaultProps = {
    title: ''
};

export default Expand;
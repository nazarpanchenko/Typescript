import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isShown, title, children, handleDisplay }) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn">
                   <i className="fas fa-chevron-up" />
                </button>
            </div>
            <div className="expand__content">{ !isShown ? null : children }</div>
        </div>
    );
}

export default Expand;
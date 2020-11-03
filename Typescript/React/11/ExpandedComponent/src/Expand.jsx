import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isShown, title, children, handleDisplay }) => {
    const ARROW_ICON = !isShown ? "fas fa-chevron-down" : "fas fa-chevron-up";
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={handleDisplay}>
                   <i className={ARROW_ICON} />
                </button>
            </div>
            <div className="expand__content">{ !isShown ? null : children }</div>
        </div>
    );
}

Expand.propTypes = {
    isShown: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    handleDisplay: PropTypes.func.isRequired
};
Expand.defaultProps = {
    isShown: false
};

export default Expand;
import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isShown, title, children, handleDisplay }) => {
    const toggleArrow = !isShown ? 'fas fa-chevron-down' : 'fas fa-chevron-up',
        showContent = !isShown ? null : children;

    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={handleDisplay}>
                   <i className={toggleArrow} />
                </button>
            </div>
            <div className="expand__content">{showContent}</div>
        </div>
    );
}

Expand.propTypes = {
    isHidden: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
    handleDisplay: PropTypes.func.isRequired
};

Expand.defaultProps = {
    title: '',
    isShown: false
};

export default Expand;
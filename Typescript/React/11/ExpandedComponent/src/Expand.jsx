import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Expand = ({ isHidden, title, children, handleToggle }) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={handleToggle}>
                   <FontAwesomeIcon icon={isHidden ? faChevronUp : faChevronDown} /> 
                </button>
            </div>
            <div className="expand__content"> { !isHidden ? null : children }</div>
        </div>
    );
}

Expand.propTypes = {
    isHidden: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
    handleToggle: PropTypes.func.isRequired
};

Expand.defaultProps = {
    title: '',
    isHidden: false
};

export default Expand;
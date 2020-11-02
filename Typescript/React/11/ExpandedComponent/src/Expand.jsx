import React from 'react';

const Expand = ({ isHidden, title, children, handleDisplay }) => {
    const toggleArrow = !isHidden ? 'fas fa-chevron-down' : 'fas fa-chevron-up',
        showContent = !isHidden ? null : children;

    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={handleDisplay}>
                   <i className={toggleArrow}></i>
                </button>
            </div>
            <div className="expand__content">{showContent}</div>
        </div>
    );
}

export default Expand;
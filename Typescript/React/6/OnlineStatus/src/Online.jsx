import React from 'react';

const Online = props => {
    if (props.isOnline) return;

    return (
        <div className="status">
            <span className="status__text">All good!</span>
        </div>
    );
}

export default Online;

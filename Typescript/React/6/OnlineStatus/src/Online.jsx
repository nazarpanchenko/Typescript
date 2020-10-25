import React from 'react';

const Online = props => {
    return (
        <div className="status">
            <span className="status__text">All good!</span>
            <button className="status__btn" onClick={props.status}>Disconnect</button>
        </div>
    );
}

export default Online;

import React from 'react';

const Online = props => {
    return (
        <>
            <span className="status__text">All good!</span>
            <button className="status__btn" onClick={props.status}>Reconnect</button>
        </>
    );
}

export default Online;

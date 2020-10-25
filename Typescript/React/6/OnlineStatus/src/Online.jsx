import React from 'react';

const Online = props => {
    return (
        <>
            <span className="status__text">All good!</span>
            <button className="status__btn" onClick={props.goOffline}>Logout</button>
        </>
    );
}

export default Online;

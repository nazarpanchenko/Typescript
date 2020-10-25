import React from 'react';

const Spinner = props => {
    const spinner = { 
        width : props.size, 
        height : props.size 
    };

    return <span 
        className="spinner" 
        style={{
            width : spinner.width, 
            height : spinner.height
        }}>
    </span>
}

export default Spinner;

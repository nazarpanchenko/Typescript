import React from 'react';
import Clock from './Clock';

const App = () => {
    return (
        <>
            <Clock location={"New York"} offset={-5} />
            <Clock location={"London"} offset={0} />
            <Clock location={"Kyiv"} offset={2} />
        </>
    );
};

export default App;

import React from 'react';
import Counter from './Counter';

const App = () => {
    return (
        <>
            <Counter start={17} interval={100} />
            <Counter start={12} interval={1000} />
            <Counter start={-21} interval={100} />
        </>
    );
};

export default App;

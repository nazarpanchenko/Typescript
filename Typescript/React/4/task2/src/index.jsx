import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const root = document.querySelector('#root');

const clock = (
    <App />
);

ReactDOM.render(<App />, root);

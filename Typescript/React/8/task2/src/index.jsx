import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Clock from './Clock';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Clock />, rootElement);

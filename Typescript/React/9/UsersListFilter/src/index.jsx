import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const root = document.querySelector('#root');

const users = [
    {
        id : '1',
        name : 'Anna',
        age : 25
    },
    {
        id : '2',
        name : 'Marcus',
        age : 28
    },
    {
        id : '3',
        name : 'Ted',
        age : 23
    }
];

ReactDOM.render(<UsersList users={users} />, root);
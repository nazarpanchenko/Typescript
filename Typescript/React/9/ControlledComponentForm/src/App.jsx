import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserForm from './UserForm';

class App extends React.Component {
    createUser = user => {
       console.log(user);
    }

    render() {
        return <UserForm onSubmit={this.createUser} />
    }
}

export default App;
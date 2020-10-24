import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn : false
        };
    }

    handleLogin =() => {
        this.setState({
            isLoggedIn : true
        });
    }

    handleLogout =() => {
        this.setState({
            isLoggedIn : false
        });
    }

    render() {
        // let button;

        // if (this.state.isLoggedIn) {
        //     button = <button onClick={this.handleLogout}>Logout</button>;
        // } else {
        //     button = <button onClick={this.handleLogin}>Login</button>;
        // }

        // {this.state.isLoggedIn ? (
        //     <button onClick={this.handleLogout}>Logout</button>
        // ) : (
        //     button = <button onClick={this.handleLogin}>Login</button>;
        // )}

        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <Login onLogin={this.handleLogout} />
                <Logout onLogout={this.handleLogin} />
            </div>
        );
    }
}

export default Auth;

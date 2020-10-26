import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
    state = {
        isOnline : false
    };

    logIn = () => {
        this.setState({
            isOnline : true
        });
    }

    logOut = () => {
        this.setState({
            isOnline : false
        });
    }

    render() {
        return (
            <>
                <Spinner size={'25px'} />
                {
                    this.state.isOnline ? (
                        <Logout onLogout={this.logOut} />
                    ) : (
                        <Login onLogin={this.logIn} />
                    )
                }
            </>
        );
    }
}

export default Auth;

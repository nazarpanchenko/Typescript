import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
    state = {
        userActive : false
    };

    userSignIn = () => {
        this.setState({
            userActive : !this.userActive
        });
    }
        
    render() {
        return (
            <>
                {this.state.userActive ? (
                    <Online isOnline={this.state.userActive} />
                ) : (
                    <Offline isOnline={this.userSignIn} />
                )}
            </>
        );
    }
}

export default Status;

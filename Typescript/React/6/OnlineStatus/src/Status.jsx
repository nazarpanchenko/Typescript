import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
    state = {
        userActive : false
    };

    signIn = () => {
        this.setState({
            userActive : false
        });
    }

    signOff = () => {
        this.setState({
            userActive : true
        });
    }
        
    render() {
        return (
            <>
                {this.state.userActive ? (
                    <Online isOnline={this.signIn} />
                ) : (
                    <Offline isOnline={this.signOff} />
                )}
            </>
        );
    }
}

export default Status;

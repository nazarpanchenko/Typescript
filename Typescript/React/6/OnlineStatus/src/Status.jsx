import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
    state = {
        userActive : false
    };

    signOff = () => {
        this.setState({
            userActive : true
        });
    }
        
    render() {
        return (
            <>
                {this.state.userActive ? (
                    <Online isOnline={this.state.userActive} />
                ) : (
                    <Offline isOnline={this.signOff} />
                )}
            </>
        );
    }
}

export default Status;

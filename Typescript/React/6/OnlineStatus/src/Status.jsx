import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
    state = {
        isOnline : false
    };

    signIn = () => {
        this.setState({
            isOnline : false
        });
    }

    signOff = () => {
        this.setState({
            isOnline : true
        });
    }
        
    render() {
        return (
            <>
                {this.state.isOnline ? (
                    <Online isOnline={this.signIn} />
                ) : (
                    <Offline isOnline={this.signOff} />
                )}
            </>
        );
    }
}

export default Status;

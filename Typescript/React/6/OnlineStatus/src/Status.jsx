import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
    state = {
        isOnline : false
    };

    signIn = () => {
        this.setState({
            isOnline : true
        });
    }
        
    render() {
        return (
            <>
                {this.state.isOnline ? (
                    <Online active={this.state.isOnline} />
                ) : (
                    <Offline inactive={this.signIn} />
                )}
            </>
        );
    }
}

export default Status;

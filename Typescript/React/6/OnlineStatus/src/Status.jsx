import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
    state = {
        isOnline : false
    };

    changeOnlineStatus = () => {
        this.setState({
            isOnline : !this.state.isOnline
        });
    }
        
    render() {
        return (
            <>
                {this.state.isOnline ? (
                    <Online userActive={this.changeOnlineStatus} />
                ) : (
                    <Offline userInactive={this.changeOnlineStatus} />
                )}
            </>
        );
    }
}

export default Status;

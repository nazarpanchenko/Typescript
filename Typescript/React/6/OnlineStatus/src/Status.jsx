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
           <div className="status">
               {this.state.isOnline ? (
                    <Online goOffline={this.changeOnlineStatus} />
                ) : (
                    <Offline goOnline={this.changeOnlineStatus} />
                )}
           </div>
        );
    }
}

export default Status;

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
           <div className="status">
               {this.state.isOnline ? (
                    <Online />
                ) : (
                    <Offline status={this.signIn} />
                )}
           </div>
        );
    }
}

export default Status;

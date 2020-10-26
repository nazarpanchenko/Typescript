import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {  
    state = {
        isOnline : false
    };

    render() {
        let onlineStatus;

        if (this.state.isOnline) {
            onlineStatus = <Online />;
        } else {
            onlineStatus = <Offline />;
        }

        return (
           <div className="status">
               {onlineStatus}
           </div>
        );
    }
}

export default Status;

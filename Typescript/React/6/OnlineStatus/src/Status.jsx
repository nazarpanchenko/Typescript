import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

let isOnline = false,
    onlineStatus;

class Status extends Component {  
    render() {
        if (isOnline) {
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

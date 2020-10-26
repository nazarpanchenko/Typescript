import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

let isOnline = false;

class Status extends Component {  
    render() {
        return (
           <div className="status">
               {isOnline ? (
                    <Online />
                ) : (
                    <Offline />
                )}
           </div>
        );
    }
}

export default Status;

import React, { Component, useState } from 'react';
import classNames from 'classnames';

class ConnectionStatus extends Component {
    state = {
        isOnline : 'online'
    };

    componentDidMount() {
        window.addEventListener('online', this.handleOnlineStatus);
        window.addEventListener('offline', this.handleOfflineStatus);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.handleOnlineStatus);
        window.removeEventListener('offline', this.handleOfflineStatus);
    }

    handleOnlineStatus = () => {
        this.setState({ isOnline : 'online' });
    }

    handleOfflineStatus = () => {
        this.setState({ isOnline : 'offline' });
    }

    render() {
        return (
            <div className={classNames('status', {'status_offline' : (this.state.isOnline === 'offline')})}>
                {
                    (this.state.isOnline === 'online') ? 'online' 
                        : (this.state.isOnline === 'offline') ? 'offline'
                        : 'online'
                }
            </div>
        );
    }
}

export default ConnectionStatus;
import React, { Component, useState } from 'react';
import classNames from 'classnames';

class ConnectionStatus extends Component {
    state = {
        isOnline : 'online'
    };

    componentDidMount() {
        window.addEventListener('online', this.handleOnineStatus);
        window.addEventListener('offline', this.handleOffineStatus);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.handleOnineStatus);
        window.removeEventListener('offline', this.handleOffineStatus);
    }

    handleOnlineStatus = () => {
        this.setState({ isOnline : 'online' });
    }

    handleOfflineStatus = () => {
        this.setState({ isOnline : 'offline' });
    }

    render() {
        const statusText = (this.state.isOnline === 'online') ? 'Online' 
            : (this.state.isOnline === 'offline') ? 'Offline'
            : 'Online';

        return (
            <div className={classNames('status', { 'status_offline' : !this.state.isOnline })}>
                {statusText}
            </div>
        );
    }
}

export default ConnectionStatus;
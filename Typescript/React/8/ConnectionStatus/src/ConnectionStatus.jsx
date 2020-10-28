import React from 'react';

class ConnectionStatus extends React.Component {
    state = {
        connected : 'Online'
    }

    componentDidMount() {
        window.addEventListener('online', this.showConnectionStatus);
        window.addEventListener('offline', this.showConnectionStatus);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.showConnectionStatus);
        window.removeEventListener('offline', this.showConnectionStatus);
    }

    showConnectionStatus = () => {
        this.setState({
            connected : navigator.onLine ? 'Online' : 'Offline'
        });

        return this.state.connected;
    }

    render() {
        return (
            <div className={
                `status ${this.state.connected === 'Offline' ? 
                    "status_offline" : this.state.connected === 'Online' ? "Online" 
                    : ""
                }`}>
                {this.state.connected}
            </div>
        );
    }
}

export default ConnectionStatus;
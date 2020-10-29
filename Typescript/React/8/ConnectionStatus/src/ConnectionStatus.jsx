import React from 'react';

class ConnectionStatus extends React.Component {
    state = {
        connected : 'online'
    };

    componentDidMount() {
        window.addEventListener('online', this.showConnectionStatus);
        window.addEventListener('offline', this.showConnectionStatus);
    }

    componentDidUpdate() {
        window.removeEventListener('online', this.showConnectionStatus);
        window.removeEventListener('offline', this.showConnectionStatus);
    }

    showConnectionStatus = () => {
        this.setState({
            connected : navigator.onLine ? 'online' : 'offline'
        });
    }

    render() {
        return (
            <div className={`status${this.state.connected === 'online'
                    ? '' : this.state.connected === 'offline' ? ' status_offline' 
                    : ''
                }`}>
                {this.state.connected}
            </div>
        );
    }
}

export default ConnectionStatus;
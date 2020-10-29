import React from 'react';

class ConnectionStatus extends React.Component {
    state = {
        connected : 'online'
    };

    componentDidMount() {
        window.addEventListener('online', this.setOnlineStatus);
        window.addEventListener('offline', this.setOfflineStatus);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.setOnlineStatus);
        window.removeEventListener('offline', this.setOfflineStatus);
    }

    setOnlineStatus = () => {
        this.setState({
            connected : 'online'
        });
    }

    setOfflineStatus = () => {
        this.setState({
            connected : 'offline'
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
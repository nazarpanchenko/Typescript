import React from 'react';

class ConnectionStatus extends React.Component {
    state = {
        connected : 'Online'
    }

    componentDidMount() {
        window.addEventListener('online', this.showConnectionStatus);
        window.addEventListener('offline', this.showConnectionStatus);
        this.changeStyles();
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

    changeStyles = () => {
        const status = document.querySelector('.status');
        if (this.state.connected) {
            status.classList.remove('status_offline');
        } else {
            status.classList.add('status_offline');
        }
    }

    render() {
        return <div className="status">{this.state.connected}</div>
    }
}

export default ConnectionStatus;
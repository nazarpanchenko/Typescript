import React from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends React.Component {
    state = {
        userData : {
            name: 'GitHub', 
            location: 'San Francisco, CA', 
            avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4' 
        }
    };

    componentDidMount() {
        this.fetchUserData(this.props.userId);
    }

    fetchUserData = userId => {
        const userUrl = `https://api.github.com/users/${userId}`;
        fetch(userUrl)
            .then(response => response.json())
            .then(userData => 
                this.setState({
                    userData
                })
            );
    }

    render() {
        return (
            <div className="page">
                 <header className="header">
                    <UserMenu userData={this.state.userData} />
                </header>
                <UserProfile userData={this.state.userData} />
            </div>
        );
    }
}

export default App;
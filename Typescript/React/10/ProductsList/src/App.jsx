import React from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends React.Component {
    state = {
        userData : {
            firstName : 'John',
            lastName : 'Doe'
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            userData : {
                ...this.state.userData,
                [name] : value
            }
        });
    }

    render() {
        const { userData } = this.state;
    
        return (
            <div className="page">
                <h1 className="title">
                    {`Hello, ${userData.firstName} ${userData.lastName}`}
                </h1>
                <main className="content">
                    <Profile 
                        userData={userData} 
                        handleChange={this.handleChange}
                    />
                    <ShoppingCart userData={userData} />
                </main>
            </div>
        );
    }
}

export default App;
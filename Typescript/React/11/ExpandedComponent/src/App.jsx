import React, { Component } from 'react';
import Expand from './Expand';

class App extends React.Component {
    state = {
        display : false
    };

    toggleDisplay = () => {
        this.setState({
            display : !this.state.display
        });
    }

    render() {
        return (
            <div className="app">
                <Expand 
                    isHidden={this.state.display}
                    title='Some title' 
                    handleToggle={this.toggleDisplay}>
                        <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
                </Expand>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
    state = {
        display : false
    };

    showDisplay = () => {
        this.setState({
            display : true
        });
    }

    render() {
        return (
            <div className="app">
                <Expand 
                    isShown={this.state.display}
                    title='Some title' 
                    showDisplay={this.showDisplay}>
                        <div className="expand__content">
                            <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
                        </div>
                </Expand>
            </div>
        );
    }
}

export default App;
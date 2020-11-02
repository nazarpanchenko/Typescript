import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
    state = {
        display : false
    };

    render() {
        return (
            <div className="app">
                <Expand 
                    title='Some title'
                    isShown={this.state.display}>
                        <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
                </Expand>
            </div>
        );
    }
}

export default App;
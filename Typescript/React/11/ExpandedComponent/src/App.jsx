import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
    state = {
        display : false
    };

    handleDisplay = () => {
        this.setState({
            display : !this.state.display
        });
    }

    render() {
        return (
            <div className="app">
                <Expand 
                    isShown={this.state.display}
                    title='Some title' 
                    handleDisplay={this.handleDisplay}>
                        <p>Addtional content</p>
                </Expand>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
    state = {
        visible : true
    };

    toggle = () => {
        this.setState({
            visible : !this.state.visible
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                {this.state.visible && <Clock />}
            </div>
        );
    }
}

export default App;

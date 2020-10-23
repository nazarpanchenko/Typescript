import React, { Component } from 'react';

const ON = 'On',
    OFF = 'Off';

let toggleState;

class Toggler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleState : OFF
        };
    }

    toggleButtonState = () => {
        this.setState({
            toggleState : this.state.toggleState === OFF 
                ? ON : this.state.toggleState === ON 
                ? OFF : ON
        });
    }

    render() {
        return(
           <button 
                className="toggler"
                onClick={this.toggleButtonState}
           >
               {this.state.toggleState}
           </button>
        );
    }
}

export default Toggler;

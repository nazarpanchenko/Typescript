import React from 'react';

class GoodButton extends React.Component {
    handleClick(event) {
        const buttonText = event.target.textContent;

        alert(buttonText);
    }

    render() {
        return (
            <button 
                className="fancy-button"
                onClick={this.handleClick}
            >
                Click me!
            </button>
        );
    }
}

export default GoodButton;

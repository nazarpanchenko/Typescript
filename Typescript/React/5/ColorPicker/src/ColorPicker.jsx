import React, { Component } from 'react';

const CORAL = 'Coral',
    AQUA = 'Aqua',
    BISQUE = 'Bisque';

let pickerColor;

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pickerColor : ''
        };
    }

    setPickerColor = color => {
        this.setState({
            pickerColor : color
        });
    }

    resetPickerColor() {
        this.setState({
            pickerColor : ''
        });
    }

    render() {
        return (
            <div>
                <div className="picker__title">
                    {this.state.pickerColor}
                </div>
                <div onMouseLeave={() => this.resetPickerColor()}>
                    <button 
                        onMouseOver={() =>this.setPickerColor(CORAL)}
                        className="picker__button picker__button_coral" 
                    ></button>
                    <button 
                        onMouseOver={() => this.setPickerColor(AQUA)}
                        className="picker__button picker__button_aqua" 
                    ></button>
                    <button 
                        onMouseOver={() => this.setPickerColor(BISQUE)}
                        className="picker__button picker__button_bisque" 
                    ></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;

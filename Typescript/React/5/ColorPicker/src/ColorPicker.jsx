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

    setPickerColor = (color, e) => {
        let updatedColor = (e.target.style.backgroundColor = color);

        this.setState({
            pickerColor : this.updatedColor
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
                        onMouseOver={this.setPickerColor.bind(this, CORAL)}
                        className="picker__button picker__button_coral" 
                    ></button>
                    <button 
                        onMouseOver={this.setPickerColor.bind(this, AQUA)}
                        className="picker__button picker__button_aqua" 
                    ></button>
                    <button 
                        onMouseOver={this.setPickerColor.bind(this, BISQUE)}
                        className="picker__button picker__button_bisque" 
                    ></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;

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
            pickerColor : updatedColor
        });
    }

    resetHover() {
        this.setState({
            pickerColor : ''
        });
    }

    render() {
        return(
            <div>
                <div className="picker__title">
                    {this.state.pickerColor}
                </div>
                <div>
                    <button 
                        className="picker__button picker__button_coral" 
                        onMouseOver={this.setPickerColor.bind(this, CORAL)}
                        onMouseLeave={() => this.resetHover()}
                    ></button>
                    <button 
                        className="picker__button picker__button_aqua" 
                        onMouseOver={this.setPickerColor.bind(this, AQUA)}
                        onMouseLeave={() => this.resetHover()}
                    ></button>
                    <button 
                        className="picker__button picker__button_bisque" 
                        onMouseOver={this.setPickerColor.bind(this, BISQUE)}
                        onMouseLeave={() => this.resetHover()}
                    ></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;

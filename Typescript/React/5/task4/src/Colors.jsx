import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
    setBodyColor = color => {
        document.body.style.backgroundColor = color;
    }

    render() {
        return (
            <div className="colors">
                <button 
                    className="colors__button"
                    onClick={() => this.setBodyColor(RED)}
                    style={{
                        backgroundColor : RED
                    }}
                />
                <button 
                    className="colors__button"
                    onClick={() => this.setBodyColor(GREEN)}
                    style={{
                        backgroundColor : GREEN
                    }} 
                />
                <button 
                    className="colors__button"
                    onClick={() => this.setBodyColor(BLUE)}
                    style={{
                        backgroundColor : BLUE
                    }}
                />
            </div>
        );
    }
}

export default Colors;

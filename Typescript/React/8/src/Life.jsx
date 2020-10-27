import React, { Component } from 'react';

class Life extends Comment {
    constructor(props) {
        super(props);
        console.log('constructor: good place to create state');
    }

    componentDidMount() {
        console.log('componentDidMount: API calls, subscriptions');
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');

        return nextProp.number % 2;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
    }

    render() {
        console.log('return React element to build DOM');

        return <div>{this.props.number}</div>;
    }
}

export default Life;
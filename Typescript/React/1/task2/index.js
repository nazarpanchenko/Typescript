//index.js

const rootElement = document.querySelector('#root');

const element = React.createElement(
    'div',
    { className : 'greeting' },
    React.createElement(
        'div',
        { className : 'greeting__title' },
        'Hello, World'
    ),
    React.createElement(
        'div',
        { className : 'greeting__text' },
        'I\'m learning React'
    )
);

ReactDOM.render(element, rootElement);
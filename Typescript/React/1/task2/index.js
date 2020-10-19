//index.js

const element = React.createElement(
    'div',
    { className : 'greeting' },
    [
        React.createElement(
            'div',
            { className : 'greeting__title' },
            'Hello, World'
        )
    ]
);
//index.js

const rootElement = document.querySelector('#root');

const element = (
    <div class='greeting'>
        <div className="greeting__title">Hello, world</div>
        <div className="greeting__title">I\'m learning React</div>
    </div>
);

ReactDOM.render(element, rootElement);

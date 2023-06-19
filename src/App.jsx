import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This is a simple React web page.</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

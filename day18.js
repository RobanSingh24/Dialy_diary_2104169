// src/App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Root() {
  return <h1>Hello from Root</h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

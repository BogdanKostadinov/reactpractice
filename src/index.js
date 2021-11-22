import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const JSX = (<div>
  <p>Hello</p>
  <p>Worlld</p>
</div>);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);

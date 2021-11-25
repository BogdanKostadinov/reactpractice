import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class TestClass extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>THIS IS A TEST</h1>
      </div>
    )
  }
}
//yo

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);

ReactDOM.render(<TestClass/>, document.getElementById('test'));

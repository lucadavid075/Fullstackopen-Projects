import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'




const App = () => {
  return (
    <div>
      <Header course= 'Half Stack application development' />
      <Content />
      <Total exercises1={10} exercises2={7} exercises3={14} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))



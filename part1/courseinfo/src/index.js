import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'


const App = () => {
  const course ="Half Stack application development"
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
   {
    name: 'Using props to pass data',
    exercises: 7
   },
   {
    name: 'State of a component',
    exercises: 14
  }
]
  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} />
      <Content part2={parts[1].name} exercises2={parts[1].exercises} />
      <Content part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))



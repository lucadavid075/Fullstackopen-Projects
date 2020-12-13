import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'


const App = () => {
  const course ="Half Stack application development"
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={part1.name} exercises={part1.exercises} />
      <Total exercises1={part1.exercises}  exercises2={part2.exercises}  exercises3={part3.exercises} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))



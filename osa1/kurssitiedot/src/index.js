import React from 'react'
import ReactDOM from 'react-dom'

const getResult = (props) => {
  let result = 0
  props.parts.forEach(part => {
    result += part.exercises
  });
  return result
}

const Part = (props) => <p>{props.part} {props.exercises}</p>
const Header = (props) => <h1>{props.course}</h1>
const Content = (props) => props.parts.map(part => <Part part={part.name} exercises={part.exercises} />)
const Total = (props) => <p>Number of exercises {getResult(props)}</p>


const App = () => {
  const course = 'Half Stack application development'
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
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
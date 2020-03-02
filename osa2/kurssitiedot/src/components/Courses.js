import React from 'react'

const Header = (props) => {
    return (
      <h2>{props.course}</h2>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.pPart.name} {props.pPart.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {
          props.parts.map(part => (
            <Part pPart={part} key={part.id} />
          ))
        }
      </div>
  
    )
  }
  
  const Total = ({ parts }) => <p><b>total of {parts.map(part => part.exercises).reduce((acc, val) => acc + val)} exercises</b></p>
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header key="header" course={course.name} />
        <Content key="content" parts={course.parts} />
        <Total key="total" parts={course.parts} />
      </div>
    )
  }
  
  const Courses = ({ courses }) => courses.map((course) => <div><Course key={course.name} course={course} /></div>)

  export default Courses
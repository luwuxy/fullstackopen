import { useState } from 'react'
import './App.css'

function Header({ course }) {
  return <h1>{course}</h1>
}

function Content(props) {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

function Part({ part, exercises }) {
  return <p>{part} {exercises}</p>
}

function Total({ exercises1, exercises2, exercises3 }) {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const props = {
    part1,
    part2,
    part3,
    exercises1,
    exercises2,
    exercises3,
  }

  const exercises = {
    exercises1,
    exercises2,
    exercises3
  }

  return (
    <div>
      <Header course={course} />
      <Content {...props} />
      <Total {...exercises} />
    </div>
  )
}

export default App

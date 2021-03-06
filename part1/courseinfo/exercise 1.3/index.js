import React from 'react'
import ReactDOM from 'react-dom'

const Header=({course})=><h1>{course}</h1>
const Content=({part1,part2,part3})=>(
    <div>
      <Part part={part1}  />
      <Part part={part2}  />
      <Part part={part3}  />
    </div>
)
const Part=({part})=><p>{part.name} {part.exercises}</p>
const Total=({part1,part2,part3})=><p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>

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
  var content={
    part1,part2,part3
  }
  return (
    <div>
      <Header course={course} />
      <Content {...content} />
      <Total {...content} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

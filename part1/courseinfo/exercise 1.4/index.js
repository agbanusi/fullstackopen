import React from 'react'
import ReactDOM from 'react-dom'

const Header=({course})=><h1>{course}</h1>
const Content=(parts)=>(
    <div>
      <Part part={parts[0]}  />
      <Part part={parts[1]}  />
      <Part part={parts[2]}  />
    </div>
)
const Part=({part})=><p>{part.name} {part.exercises}</p>
const Total=(part)=><p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
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
      <Content {...parts} />
      <Total {...parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

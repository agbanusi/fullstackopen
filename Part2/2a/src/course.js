import React from 'react'

const Header=({course})=><h1>{course}</h1>

const Content=({parts})=>(
    <div>
       { parts.map((i,k)=> <Part key={k} part={i}  />)}
    </div>
)

const Part=({part})=><p>{part.name} {part.exercises}</p>

const Total=({part})=><h4>Total of {part.map(i=>i.exercises).reduce((a,b)=>a+b)} exercises</h4>

const Course=({course})=>(
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total part={course.parts} />
  </div>
  )
  
export default Course
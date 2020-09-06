import React,{useState, useEffect} from 'react'

function App(props) {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0,0,0,0,0,0])
    const appy=()=>{
        let copy=[...votes]
        copy[selected]+=1
        setVotes(copy)
    }
    const most=()=>{
        let max=Math.max(...votes)
        return votes.findIndex((i)=>i==max)
    }
    return (
        <div>
        <h2>Anecdote of the day</h2>
        {props.anecdotes[selected]}
        <p>has {votes[selected]} votes</p>
        <button onClick={appy}>Vote</button>
        <button onClick={()=>setSelected(Math.floor(Math.random()*6))}>Next</button>

        <h2>Anecdotes with most votes.</h2>
        {props.anecdotes[most()]}
        <p>has {votes[most()]} votes</p>
        </div>
    )
}
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

const Apps=()=> <App anecdotes={anecdotes}  />

export default Apps

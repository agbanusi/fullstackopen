import React,{useState} from 'react'

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={()=>{setGood(good+1)}}>Good</button>
            <button onClick={()=>{setBad(bad+1)}}>Bad</button>
            <button onClick={()=>{setNeutral(neutral+1)}}>Neutral</button>
            <br />
            {good>0 || bad>0 || neutral>0? <Statistics {...{good,bad,neutral}} /> : <p>No Feedback given</p>
            }
        </div>
    )
}
const Statistic=({text, value})=><tbody><tr><td>{text}</td><td>{value}</td></tr></tbody>

const Statistics=({good,bad,neutral})=>(
    <div>
    <h3>Statistics</h3>
    <table>
    <Statistic text='good' value={good} />
    <Statistic text='bad' value={bad} />
    <Statistic text='neutral' value={neutral} />
    <Statistic text='all'  value={good+bad+neutral} />
    <Statistic text='average' value={(good-bad)/(good+bad+neutral)} />
    <Statistic text='positive' value={good*100/(good+bad+neutral)} />
    </table>
    </div>
)
export default App

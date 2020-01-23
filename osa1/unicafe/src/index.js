import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (params) => <button onClick={params.action}>{params.text}</button>
//const Statistic = (params) => <div>{params.text}: {params.value}</div>
const Statistic = (params) => <tr><td>{params.text}:</td><td>{params.value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
    const countAll = () => good + neutral + bad
    const average = () => ((good * 1) + (bad * -1)) / countAll()
    const positive = () => {
        let value = good * 1 / countAll() * 100
        return value + ' %'
    }

    if (countAll() > 0) {
        return (
            <div>
                <h1>statistics</h1>
                <table>
                    <tbody>
                        <Statistic text='good' value={good} />
                        <Statistic text='neutral' value={neutral} />
                        <Statistic text='bad' value={bad} />
                        <Statistic text='all' value={countAll()} />
                        <Statistic text='average' value={average()} />
                        <Statistic text='positive' value={positive()} />
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <h1>statistics</h1>
            <p>No feedback given</p>
        </div>
    )

}

const App = (params) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const stateIncrement = (flag) => () => {
        if (flag === 'good') {
            setGood(good + 1)
        } else if (flag === 'neutral') {
            setNeutral(neutral + 1)
        } else {
            setBad(bad + 1)
        }
    }


    return (
        <div>
            <h1>give feedback</h1>
            <Button action={stateIncrement('good')} text='good' />
            <Button action={stateIncrement('neutral')} text='neutral' />
            <Button action={stateIncrement('bad')} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />


        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
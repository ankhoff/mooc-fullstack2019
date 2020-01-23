import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = (params) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState({})

    const handleClick = (max) => () => {
        let random = Math.floor(Math.random() * Math.floor(max))
        setSelected(random)
    }


    const addVote = (selected) => () => {
        const copy = { ...vote }
        if (vote.hasOwnProperty(selected)) {
            copy[selected] += 1
        } else {
            copy[selected] = 1
        }
        setVote(copy)
    }

    const AnecdoteWithMostVotes = (params) => {
        if (Object.keys(vote).length === 0) {
            return (
                <div>no votes submitted yet</div>
            )
        } else {
            let mostVotes = -1
            for (const key in vote) {
                if (mostVotes === -1) {
                    mostVotes = key
                } else {
                    if (vote[key] > vote[mostVotes]) {
                        console.log(vote[key], vote[mostVotes])
                        mostVotes = key
                    }
                }
            }
            return (
                <div>{params.anecdotes[mostVotes]}</div>
            )
        }
    }

    return (
        <div><div><h2>Anecdote of the day</h2></div>
            <div>
                {params.anecdotes[selected]}
            </div>
            <div>
                <Button onClick={addVote(selected)} text='vote' />
                <Button onClick={handleClick(params.anecdotes.length)} text='next anecdote' />
            </div>
            <div><h2>Anecdote with most votes</h2></div>
            <div><AnecdoteWithMostVotes anecdotes={anecdotes} /></div>
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


ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
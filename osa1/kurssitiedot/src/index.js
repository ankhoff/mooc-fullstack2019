import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.pName} {props.pSize}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part pName={props.pName1} pSize={props.pSize1} />
            <Part pName={props.pName2} pSize={props.pSize2} />
            <Part pName={props.pName3} pSize={props.pSize3} />
        </div>

    )
}

const Total = (props) => {
    return (
        <p>yhteensä {props.total} tehtävää</p>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content pName1={part1} pSize1={exercises1} pName2={part2} pSize2={exercises2} pName3={part3} pSize3={exercises3} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
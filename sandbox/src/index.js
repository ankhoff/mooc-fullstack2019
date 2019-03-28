import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () =>{
    return(
        <div>Greeting app created by: <a href="https://github.com/ankhoff">ankhoff</a>
        </div>
    )
}

const Hello = (props) => {
    const name = props.name
    const age = props.age
    const bornYear = () => new Date().getFullYear() - age
    
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>
            So you are were born {bornYear()}
        </p>
      </div>
    )
  }
  
  const App = () => {
    const nimi = 'Pekka'
    const ika = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Arto" age={26 + 10} />
        <Hello name={nimi} age={ika} />
        <Footer />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))
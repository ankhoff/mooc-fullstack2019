import React from 'react'

const ResultRow = ( { name, manualSet } ) => {

    return (
        <div>{ name } <button value={ name } type="submit" onClick={ manualSet }>show</button></div>
    )
}

export default ResultRow
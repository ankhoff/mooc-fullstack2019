import React from 'react'

const AddPersonForm = (props) => {
    return (
        <form>
            <div>
                name: <input value={props.newName} onChange={props.createNewName} />
            </div>
            <div>
                phone: <input value={props.newNumber} onChange={props.createNewNumber} />
            </div>
            <div>
                <button type="submit" onClick={props.addNewPerson}>add</button>
            </div>
        </form>
    )
}

export default AddPersonForm
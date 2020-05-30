import React from 'react';

const FindCountryForm = (props) => {
    return (
        < form >
            <div>
                find countries: <input value={props.searchTerm} onChange={props.createNewSearchTerm} />
            </div>
        </form >
    )
}

export default FindCountryForm;
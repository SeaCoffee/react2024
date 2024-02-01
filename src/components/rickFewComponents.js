import RickSingle from "./rickSingleComponent";
import React, { useState, useEffect } from 'react';

function RickAll() {
    const [ricks, setRicks] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(response => setRicks(response.results.slice(0, 6)))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            {ricks.map(rick => <RickSingle key={rick.id} rick={rick} />)}
        </div>
    )
}

export default RickAll;



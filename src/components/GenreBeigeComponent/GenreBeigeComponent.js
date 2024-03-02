import React from 'react';
import { Badge } from 'reactstrap';

const GenreBadge = ({ genreId, genreDictionary }) => {
    const genreName = genreDictionary && genreDictionary[genreId] ? genreDictionary[genreId] : 'Unknown';
    console.log('from beige', genreDictionary, genreId, genreName);

    return (
        <Badge color="secondary" style={{ margin: '0.5rem' }}>
            {genreName}
        </Badge>
    );
};


export default GenreBadge;



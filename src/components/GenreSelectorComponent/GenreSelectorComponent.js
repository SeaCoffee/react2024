import React from 'react';
import GenresListStyles from './GenresListStyles.css'

const GenreSelector = ({ genres, onGenreSelect }) => {
    return (
        <div>
    <ul className="genre-list">
                {genres.map(genre => (
                    <li
                        key={genre.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => onGenreSelect(genre.id)}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};




export default GenreSelector;

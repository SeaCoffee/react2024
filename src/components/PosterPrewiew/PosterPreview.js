import React from 'react';

const PosterPreview = ({ imageUrl }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${imageUrl}`;

    return (
        <img src={posterUrl} alt="Movie Poster" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
    );
};

export default PosterPreview;

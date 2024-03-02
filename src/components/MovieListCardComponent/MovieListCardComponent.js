import React from 'react';
import { useNavigate } from 'react-router-dom';

import PosterPreview from "../PosterPrewiew/PosterPreview";
import StarsRating from "../StarsRatingComponent/StarsRatingComponent";
import GenreBadge from "../GenreBeigeComponent/GenreBeigeComponent";




const MoviesListCard = ({ movie: { id, title, poster_path, vote_average, genre_ids, overview }, genreDictionary }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie-details/${id}`, { replace: true });
    };

    return (
        <div onClick={handleClick} style={{ width: '24%', margin: '0.5%', cursor: 'pointer', boxSizing: 'border-box' }}>
            <PosterPreview imageUrl={poster_path} />
            <div>
                <h3>{title}</h3>
                <StarsRating rating={vote_average} />
                <div>
                    {genre_ids ? genre_ids.map(genreId => (
                        <GenreBadge key={genreId} genreId={genreId} genreDictionary={genreDictionary} />
                    )) : <p>Not found</p>}
                </div>
                <p>{overview}</p>
            </div>
        </div>
    );
};



export default MoviesListCard;



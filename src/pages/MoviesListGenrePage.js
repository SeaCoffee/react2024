import React from 'react';
import MovieGenre from "../components/GenresComponent/GenresComponent";

import { useParams } from 'react-router-dom';

const MoviesListGenrePage = () => {
    console.log('MoviesListGenrePage activated');
    const { genreId } = useParams();
    console.log(genreId, 'log genre page');

    return (
        <div>
            <MovieGenre genreId={parseInt(genreId, 10)} />
        </div>
    );
};
export default MoviesListGenrePage;


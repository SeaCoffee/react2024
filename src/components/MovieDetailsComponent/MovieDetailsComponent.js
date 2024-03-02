import React, {useEffect, useState} from 'react';

import PosterPreview from "../PosterPrewiew/PosterPreview";
import StarsRating from "../StarsRatingComponent/StarsRatingComponent";
import GenreBadge from "../GenreBeigeComponent/GenreBeigeComponent";
import {useParams} from "react-router-dom";
import {genresService, moviesService} from "../../services/axiosService";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [genres, setGenres] = useState({});

    useEffect(() => {
        console.log('Fetching movie details for ID:', movieId);
        moviesService.byId(movieId)
            .then(({ data }) => {
                console.log('Movie data:', data);
                setMovie(data);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }, [movieId]);

    useEffect(() => {
        console.log('Fetching genres');
        genresService.getAll()
            .then(({ data }) => {
                const genresDict = data.genres.reduce((acc, genre) => {
                    acc[genre.id] = genre.name;
                    return acc;
                }, {});
                setGenres(genresDict);
            })
            .catch(error => {
                console.error("Ошибка загрузки жанров:", error);
            });
    }, []);

    if (!movie || Object.keys(genres).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <PosterPreview imageUrl={movie.poster_path} />
            <StarsRating rating={movie.vote_average} />
            <div>
                {movie.genres.map(genre => (
                    <GenreBadge key={genre.id} genreId={genre.id} genreDictionary={genres} />
                ))}
            </div>
            <p>{movie.overview}</p>
            <div>
                <p>Year: {movie.release_date}</p>
                <p>Runtime: {movie.runtime} минут</p>
                <p>Budget: ${movie.budget}</p>
                <p>Revenue: ${movie.revenue}</p>
            </div>
        </div>
    );
};


export default MovieDetails;

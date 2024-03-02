import React, { useEffect, useState } from 'react';

import MoviesListCard from "../MovieListCardComponent/MovieListCardComponent";
import {genresService} from "../../services/axiosService";
import GenreSelector from "../GenreSelectorComponent/GenreSelectorComponent";
import {usePageQuery} from "../../services/pagination";
import {moviesService} from "../../services/axiosService";
import GenreListStyles from './GenreListStyles.css'



const MovieGenreList = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [movies, setMovies] = useState([]);
    const [genreDictionary, setGenreDictionary] = useState({});
    const { page, prevPage, nextPage } = usePageQuery();

    useEffect(() => {
        genresService.getAll().then(({ data }) => {
            setGenres(data.genres);
            const dictionary = {};
            data.genres.forEach(genre => {
                dictionary[genre.id] = genre.name;
            });
            setGenres(data.genres);
            setGenreDictionary(dictionary);
        }).catch(error => console.error('Ошибка при загрузке жанров:', error));
    }, []);
    useEffect(() => {
        if (!selectedGenre) {
            moviesService.getAll(parseInt(page, 10)).then(response => {
                setMovies(response.data.results);
            });
        } else {
            genresService.getMoviesByGenre(selectedGenre, parseInt(page, 10)).then(response => {
                setMovies(response.data.results);
            });
        }
    }, [selectedGenre, page]);

    return (
        <div>
            <GenreSelector genres={genres} onGenreSelect={setSelectedGenre} />
            <div className="movies-container">
            {movies.map(movie => (

                        <MoviesListCard key={movie.id} movie={movie} genreDictionary={genreDictionary} />
                    ))}


            </div>
            <div>
                <button onClick={prevPage}>Previous</button>
                <span>Page {page}</span>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export default MovieGenreList;


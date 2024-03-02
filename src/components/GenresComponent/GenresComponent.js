import React, { useState, useEffect } from 'react';
import {genresService} from "../../services/axiosService";
import {GenreListComponent} from "../GenreListComponent/GenreListComponent";
import {useParams} from "react-router-dom";
import {usePageQuery} from "../../services/pagination";



const MovieGenre = () => {
    const { genreId } = useParams();
    const { page, prevPage, nextPage } = usePageQuery();
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genreDictionary, setGenreDictionary] = useState({});

    console.log(genreId)

    useEffect(() => {
        genresService.getAll().then(({ data }) => {
            const dictionary = {};
            data.genres.forEach(genre => {
                dictionary[genre.id] = genre.name;
            });
            setGenreDictionary(dictionary);
        }).catch(error => {
            console.error('Error', error);
        });
    }, []);

    useEffect(() => {
        if (genreId) {
            genresService.getMoviesByGenre(genreId, page).then(({ data }) => {
                setMovies(data.results);
            }).catch(error => {
                console.error('Error', error);
            });
        }
    }, [genreId, page]);


    const paginationControls = (
        <div>
            <button onClick={prevPage}>Previous</button>
            <span>Page {page}</span>
            <button onClick={nextPage}>Next</button>
        </div>
    );

    return (
        <div>
            <GenreListComponent genreId={genreId} movies={movies} genreDictionary={genreDictionary} />
            {paginationControls}
        </div>
    );
};



export default MovieGenre;

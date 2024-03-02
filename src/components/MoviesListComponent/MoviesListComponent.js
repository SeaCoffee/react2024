import {useEffect, useState} from "react";
import {moviesService, genresService } from "../../services/axiosService";
import MoviesListCard from "../MovieListCardComponent/MovieListCardComponent";
import MovieDetails from "../MovieDetailsComponent/MovieDetailsComponent";
import {usePageQuery} from "../../services/pagination";
import {useNavigate} from "react-router-dom";



export const MoviesListComponent = ({ selectedGenre, searchTerm }) => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [genres, setGenres] = useState({});
    const { page, prevPage, nextPage } = usePageQuery();
    const navigate = useNavigate();



    useEffect(() => {
        moviesService.getAll(page).then(({ data }) => {
            setMovies(data.results);
            setFilteredMovies(data.results);
        });

        genresService.getAll().then(({ data }) => {
            if (data && data.genres) {
                const genresDict = data.genres.reduce((acc, genre) => {
                    acc[genre.id] = genre.name;
                    return acc;
                }, {});
                setGenres(genresDict);
            }
        });
    }, [page]);

    useEffect(() => {
        let filtered = movies;

        if (selectedGenre) {
            filtered = filtered.filter(movie => movie.genre_ids.includes(selectedGenre));
        }

        if (searchTerm) {
            filtered = filtered.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        setFilteredMovies(filtered);
    }, [selectedGenre, searchTerm, movies]);

    const movieClick = (movieId) => {
        console.log(`Navigating to movie with ID: ${movieId}`);
        navigate(`/movies/${movieId}`);
    };


    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {filteredMovies.map(movie => (
                    <MoviesListCard
                        key={movie.id}
                        movie={movie}
                        movieClick={movieClick}
                        genreDictionary={genres}
                    />
                ))}


                {movie && genres && <MovieDetails movie={movie} genreDictionary={genres} />}



            </div>
            <div>
                <button onClick={prevPage}>Previous page</button>
                <span>Current page {page}</span>
                <button onClick={nextPage}>Next page</button>
            </div>
        </div>
    );
};

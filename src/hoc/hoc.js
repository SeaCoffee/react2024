import {useState, useEffect} from "react";


import {MainLayout} from "../layouts/MainLayout";
import {moviesService, searchService, genresService} from "../services/axiosService";

export const WithSearch = (Component) => {
    return function WrappedComponent(props) {
        const [searchTerm, setSearchTerm] = useState('');
        const [selectedGenre, setSelectedGenre] = useState('');
        const [movies, setMovies] = useState([]);
        const [genres, setGenres] = useState({});


        useEffect(() => {
            genresService.getAll().then(({ data }) => {
                const genresDict = data.genres.reduce((acc, genre) => {
                    acc[genre.id] = genre.name;
                    return acc;
                }, {});
                setGenres(genresDict);
            }).catch(error => {
                console.error('Error loading genres:', error);
            });
        }, []);



        const handleGenreSelect = (genreId) => {
            setSelectedGenre(genreId);
        };

        const handleSearch = async (query) => {
            console.log('Search query:', query);
            setSearchTerm(query);
            if (query.length > 0) {
                try {
                    const response = await searchService.getAll(query);
                    console.log('Search results:', response.data.results);
                    setMovies(response.data.results);
                } catch (error) {
                    console.error('Search error:', error);
                }
            } else {
                try {
                    const response = await moviesService.getAll();
                    console.log('Movies results:', response.data.results);
                    setMovies(response.data.results);
                } catch (error) {
                    console.error('Movies error:', error);
                }
            }
        };

        useEffect(() => {
            const fetchMovies = async () => {
                let response;
                if (searchTerm) {
                    response = await searchService.getAll(searchTerm);
                } else if (selectedGenre) {
                    response = await genresService.getMoviesByGenre(selectedGenre);
                } else {
                    response = await moviesService.getAll();
                }

                if (response && response.data && response.data.results) {
                    setMovies(response.data.results);
                }
            };

            fetchMovies().catch(console.error);
        }, [searchTerm, selectedGenre]);

        console.log(genres, 'FROM HOC');
        return <Component {...props} onSearch={handleSearch} onGenreSelect={handleGenreSelect} searchTerm={searchTerm} movies={movies} genres={genres} />;

    };
};

export const MainLayoutWithSearch = WithSearch(MainLayout);



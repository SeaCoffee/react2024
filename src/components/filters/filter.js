import {useState, useEffect} from "react";

import GenreSelector from "../GenreSelectorComponent/GenreSelectorComponent";
import SearchBar from "../SearchBarComponent/SearchBarComponent";
import {MoviesListComponent} from "../MoviesListComponent/MoviesListComponent";
import {genresService} from "../../services/axiosService";

const MoviesFilter = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        genresService.getAll().then(({ data }) => {
            setGenres(data.genres);
        }).catch(error => {
            console.error('Error loading genres:', error);
        });
    }, []);

    return (
        <div>
            <SearchBar onSearch={setSearchTerm} />
            <GenreSelector genres={genres} onGenreSelect={setSelectedGenre} />
            <MoviesListComponent selectedGenre={selectedGenre} searchTerm={searchTerm} />
        </div>
    );
};


export default MoviesFilter;

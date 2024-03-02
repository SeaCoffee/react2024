import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {searchService, genresService} from "../../services/axiosService";
import {SearchResultsPage} from "../../pages/SearchResultsPage";
import {usePageQuery} from "../../services/pagination";



export const SearchResultsComponent = () => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('query');
    const [movies, setMovies] = useState([]);
    const [genreDictionary, setGenreDictionary] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { page, prevPage, nextPage } = usePageQuery();


    useEffect(() => {
        if (searchTerm) {

            setIsLoading(true);
            Promise.all([
                searchService.getAll(searchTerm, page),
                genresService.getAll()
            ]).then(([searchResults, genreResults]) => {
                setMovies(searchResults.data.results);

                if (genreResults.data && genreResults.data.genres) {
                    const dictionary = genreResults.data.genres.reduce((acc, genre) => {
                        acc[genre.id] = genre.name;
                        return acc;
                    }, {});
                    setGenreDictionary(dictionary);
                }
            }).finally(() => {
                setIsLoading(false);
            });
        }
    }, [searchTerm]);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <SearchResultsPage searchTerm={searchTerm} movies={movies} genreDictionary={genreDictionary}
                               isLoading={isLoading}/>
            <div/>
        </div>
    );
}
import MoviesListCard from "../components/MovieListCardComponent/MovieListCardComponent";
import {usePageQuery} from "../services/pagination";
import SearchResultPage from './SearchResultPage.css'

export const SearchResultsPage = ({ searchTerm, movies, genreDictionary, isLoading }) => {
    const { page, prevPage, nextPage } = usePageQuery();

    return (
        <div>
            <h2>Search Results for "{searchTerm}"</h2>
            {isLoading ? (
                <div className="loader">Loading...</div>
            ) : (
                <>
                    <div className="movies-container">
                        {movies && movies.map(movie => (
                            <MoviesListCard key={movie.id} movie={movie} genreDictionary={genreDictionary} />
                        ))}
                    </div>
                    <div className="pagination-controls">
                        <button onClick={prevPage}>Previous</button>
                        <span>Page {page}</span>
                        <button onClick={nextPage}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
};


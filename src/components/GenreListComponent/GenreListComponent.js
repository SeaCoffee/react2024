
import MoviesListCard from "../MovieListCardComponent/MovieListCardComponent";

export const GenreListComponent = ({ movies, genreDictionary}) => {
    return (
        <div>
            {movies.map(movie => (
                <MoviesListCard key={movie.id} movie={movie} genreDictionary={genreDictionary} />
            ))}
        </div>
    );
};



export const baseURL = 'https://api.themoviedb.org';

const movieList = '/3/discover/movie';
const movieGenreList = '/3/genre/movie/list';
const oneMovie = '/3/movie';
const searchMovie = '/3/search/movie';

export const endpoints = {
    list: {
        base: movieList,
        byId: (movie_id) => `${oneMovie}/${movie_id}`
    },
    genres: {
        base: movieGenreList,
        moviesByGenre: (genreId) => `${movieList}?with_genres=${genreId}`
    },
    search: {
        base: searchMovie
    }
};


export default {
    baseURL, endpoints
}
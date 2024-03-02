import {endpoints} from "../urls/urls";
import axios from "axios";


const apiService = axios.create({
    baseURL: 'https://api.themoviedb.org'
});

const userApiService = axios.create({
    baseURL: 'https://api.themoviedb.org'
});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGI1MGU4NDEwNDBkNDRmNTM4M2FhYmQ1NjM3NWFlMyIsInN1YiI6IjY1ZGIwYjQ3NGMxZDlhMDE0OTZlZTRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ilvqz3h97l6BS5an2BS-sxDk7VDTu13Qcv1fFHAWHfA';

apiService.interceptors.request.use(request => {
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

userApiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${token}`;
    return request;
});

export const moviesService = {
    getAll: (page = 1) => apiService.get(`/3/movie/popular?page=${page}`).catch(error => console.error(error)),
    byId: (movie_id) => apiService.get(`/3/movie/${movie_id}`).catch(error => console.error(error))
};

export const genresService = {
    getAll: () => apiService.get('/3/genre/movie/list').catch(error => console.error(error)),
    getMoviesByGenre: (genreId, page = 1) => apiService.get(`/3/discover/movie?with_genres=${genreId}&page=${page}`).catch(error => console.error(error))
};

export const searchService = {
    getAll: (query) => apiService.get(`/3/search/movie?query=${query}`).catch(error => console.error(error))
};

export const userService = {
    getUserInfo: () => userApiService.get('/3/account').catch(error => console.error(error)),
};

export default apiService;




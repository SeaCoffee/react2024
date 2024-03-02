import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {moviesService} from "../services/axiosService";
import {genresService} from "../services/axiosService";
import MovieDetails from "../components/MovieDetailsComponent/MovieDetailsComponent";


const MovieDetailsPage = () => {
    const { movieId } = useParams();

    return <MovieDetails movieId={movieId} />;
};

export default MovieDetailsPage;
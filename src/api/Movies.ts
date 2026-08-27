import axios from 'axios';
import { movieSchema, Movie } from './types/Movie';
import { API_BASE_URL } from './api_base_url';

const MAX_RANDOM_MOVIE_ATTEMPTS = 5;

const requestRandomMovie = async (): Promise<Movie> => {
    const response = await axios.get(`${API_BASE_URL}/movie/random`, {
        withCredentials: true,
    });

    return movieSchema.parse(response.data);
};

const hasCompleteMedia = (movie: Movie): boolean => {
    return Boolean(movie.backdropUrl) && Boolean(movie.posterUrl) && Boolean(movie.trailerUrl);
};

export const fetchRandomMovie = async (): Promise<Movie> => {
    let movie = await requestRandomMovie();

    for (let attempt = 1; attempt < MAX_RANDOM_MOVIE_ATTEMPTS && !hasCompleteMedia(movie); attempt++) {
        movie = await requestRandomMovie();
    }

    return movie;
};

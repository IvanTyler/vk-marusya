import axios from 'axios';
import { movieSchema, Movie } from './types/Movie';

const API_BASE_URL = 'https://cinemaguide.skillbox.cc';

export const fetchRandomMovie = async (): Promise<Movie> => {
    const response = await axios.get(`${API_BASE_URL}/movie/random`, {
        withCredentials: true,
    });

    return movieSchema.parse(response.data);
};

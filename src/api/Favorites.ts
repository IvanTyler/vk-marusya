import axios from 'axios';
import { movieSchema, Movie } from './types/Movie';
import { API_BASE_URL } from './api_base_url';

export const fetchFavorites = async (): Promise<Movie[]> => {
    const response = await axios.get(`${API_BASE_URL}/favorites`, {
        withCredentials: true,
    });

    return movieSchema.array().parse(response.data);
};

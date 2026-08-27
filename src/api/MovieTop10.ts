import axios from 'axios';
import { movieSchema, Movie } from './types/Movie';
import { API_BASE_URL } from './api_base_url';

export const fetchTop10Movies = async (): Promise<Movie[]> => {
    const response = await axios.get(`${API_BASE_URL}/movie/top10`, {
        withCredentials: true,
    });

    return movieSchema.array().parse(response.data);
};

import axios from 'axios';
import { RegisterFormValues, registerResponseSchema } from './types/Auth';

const API_BASE_URL = 'https://cinemaguide.skillbox.cc';

export const registerUser = async ({ email, password, name, surname }: Omit<RegisterFormValues, 'confirmPassword'>) => {
    const body = new URLSearchParams({ email, password, name, surname });

    const response = await axios.post(`${API_BASE_URL}/user`, body, {
        withCredentials: true,
    });

    return registerResponseSchema.parse(response.data);
};

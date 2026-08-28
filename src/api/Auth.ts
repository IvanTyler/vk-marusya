import axios from 'axios';
import { LoginFormValues, loginResponseSchema, RegisterFormValues, registerResponseSchema } from './types/Auth';
import { userSchema } from './types/User';
import { API_BASE_URL } from './api_base_url';


export const registerUser = async ({ email, password, name, surname }: Omit<RegisterFormValues, 'confirmPassword'>) => {
    const body = new URLSearchParams({ email, password, name, surname });

    const response = await axios.post(`${API_BASE_URL}/user`, body, {
        withCredentials: true,
    });

    return registerResponseSchema.parse(response.data);
};

export const loginUser = async ({ email, password }: LoginFormValues) => {
    const body = new URLSearchParams({ email, password });

    const response = await axios.post(`${API_BASE_URL}/auth/login`, body, {
        withCredentials: true,
    });

    return loginResponseSchema.parse(response.data);
};

export const fetchProfile = async () => {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
        withCredentials: true,
    });

    return userSchema.parse(response.data);
};

export const logoutUser = async () => {
    const response = await axios.get(`${API_BASE_URL}/auth/logout`, {
        withCredentials: true,
    });

    return loginResponseSchema.parse(response.data);
};

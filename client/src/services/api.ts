import axios from 'axios';
import { API_URL } from '../config';

// Axios'un temel ihtiyaçları
const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export const loginUser = async (username: string) => {
    try {
        console.log(`📡 İstek atılıyor: ${API_URL}/api/users`);

        const response = await api.post('/api/users/register', { username });

        console.log("Sunucudan cevap :", response.data);
        return response.data;
    } catch (error) {
        console.error("API Hatası:", error);
        throw error;
    }
}
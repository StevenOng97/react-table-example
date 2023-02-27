import axios from '../api/axiosClient';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            return {
                ...prev,
                jwtToken: response.data.jwtToken
            }
        });
        return response.data.jwtToken;
    }
    return refresh;
};

export default useRefreshToken;
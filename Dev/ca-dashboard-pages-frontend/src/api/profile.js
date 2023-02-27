import { getCurrentUser } from '../helpers/helpers';
import { axiosPrivate } from './axiosClient';

const authEndpointUrl = '/profile';

const ProfileApi = {
  get: () => {
    const url = `${authEndpointUrl}`;
    const auth = getCurrentUser();
    
    axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.jwtToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return axiosPrivate.get(url);
  },

  create: (payload) => {
    const url = `${authEndpointUrl}`;
    const auth = getCurrentUser();
    
    axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.jwtToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return axiosPrivate.post(url, payload);
  },

  update: (payload) => {
    const url = `${authEndpointUrl}/${payload.id}`;
    const auth = getCurrentUser();
    
    axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.jwtToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return axiosPrivate.put(url, payload);
  }
};

export { ProfileApi };

import { getCurrentUser } from '../helpers/helpers';
import { axiosPrivate } from './axiosClient';

const endpointUrl = '/situation';

const SituationApi = {
  get: () => {
    const url = `${endpointUrl}`;
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

  getAvailablePosts: () => {
    const url = `${endpointUrl}/available`;
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

  getSituationById: (id) => {
    const url = `${endpointUrl}/${id}`;
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
    const url = `${endpointUrl}`;
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
    const url = `${endpointUrl}/${payload.id}`;
    delete payload.id;
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

export { SituationApi };

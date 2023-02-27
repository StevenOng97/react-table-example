import { getCurrentUser } from '../helpers/helpers';
import axiosClient, { axiosPrivate } from './axiosClient';
import Cookies from 'universal-cookie';
const authEndpointUrl = '/account';

const UserApi = {
  login: (params) => {
    const url = `${authEndpointUrl}/login`;
    return axiosClient.post(url, params);
  },

  refreshToken: () => {
    const url = `${authEndpointUrl}/refresh-token`;
    const auth = getCurrentUser();

    axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.jwtToken}`;
        }
        if (!config.headers['SetCookie']) {
          config.headers['SetCookie'] = `refreshToken=${auth?.jwtToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return axiosPrivate.post(url, {
      token: auth?.jwtToken
    });
  },

  signUp: (params) => {
    const url = `${authEndpointUrl}/signup`;
    return axiosClient.post(url, params);
  },

  signUpVerifyEmail: (params) => {
    const url = `${authEndpointUrl}/signup/verify-email`;
    return axiosClient.post(url, params);
  },
};

export { UserApi };

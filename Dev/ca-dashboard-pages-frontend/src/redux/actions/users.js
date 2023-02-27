import * as type from '../types';

export function login(data) {
  return {
    type: type.LOGIN_REQUESTED,
    payload: data
  }
}

export function refreshToken() {
  return {
    type: type.REFRESH_TOKEN_REQUESTED,
  }
}
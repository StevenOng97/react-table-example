import * as type from '../types';

export function getProfile() {
  return {
    type: type.GET_PROFILE_REQUESTED,
  }
}

export function createProfile(payload) {
  return {
    type: type.CREATE_PROFILE_REQUESTED,
    payload
  }
}

export function updateProfile(payload) {
  return {
    type: type.UPDATE_PROFILE_REQUESTED,
    payload
  }
}
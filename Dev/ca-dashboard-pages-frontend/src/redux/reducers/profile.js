import * as type from '../types';

const initialState = {
  profile: {},
  createdProfile: {},
  loading: false,
  error: null,
  updatedProfile: {},
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case type.GET_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case type.GET_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.CREATE_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        createdProfile: action.payload,
      };

    case type.CREATE_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.UPDATE_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };

    case type.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
}

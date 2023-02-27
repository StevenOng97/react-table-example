import * as type from '../types';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case type.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.REFRESH_TOKEN_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case type.REFRESH_TOKEN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}

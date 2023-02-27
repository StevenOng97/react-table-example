import * as type from '../types';

const initialState = {
  situations: [],
  availableSituations: [],
  situation: {},
  createdSituation: {},
  loading: false,
  error: null,
  updatedSituation: {},
};

export default function situation(state = initialState, action) {
  switch (action.type) {
    case type.GET_SITUATION_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_SITUATION_SUCCESS:
      return {
        ...state,
        loading: false,
        situation: action.payload,
      };
    case type.GET_SITUATION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.GET_SITUATION_AVAILABLE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_SITUATION_AVAILABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        availableSituations: action.payload,
      };
    case type.GET_SITUATION_AVAILABLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.GET_SITUATIONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_SITUATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        situations: action.payload,
      };
    case type.GET_SITUATIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.CREATE_SITUATION_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.CREATE_SITUATION_SUCCESS:
      return {
        ...state,
        loading: false,
        createdSituation: action.payload,
      };

    case type.CREATE_SITUATION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.UPDATE_SITUATION_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.UPDATE_SITUATION_SUCCESS:
      return {
        ...state,
        loading: false,
        situation: action.payload,
      };

    case type.UPDATE_SITUATION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
}

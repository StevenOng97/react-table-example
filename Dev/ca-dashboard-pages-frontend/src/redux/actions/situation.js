import * as type from '../types';

export function getSituationByAccount() {
  return {
    type: type.GET_SITUATIONS_REQUESTED,
  }
}

export function getSituationById(payload) {
  return {
    type: type.GET_SITUATION_REQUESTED,
    payload
  }
}

export function getAvailableSituations(payload) {
  return {
    type: type.GET_SITUATION_AVAILABLE_REQUESTED,
    payload
  }
}

export function createSituation(payload, navigate) {
  return {
    type: type.CREATE_SITUATION_REQUESTED,
    payload,
    navigate
  }
}

export function updateSituation(payload, navigate) {
  return {
    type: type.UPDATE_SITUATION_REQUESTED,
    payload,
    navigate
  }
}
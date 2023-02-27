import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SituationApi } from '../../api/situation';
import { forwardTo } from '../../helpers/helpers';
import * as type from '../types';
import history from '../../helpers/history';

function* getSituationByAccount(action) {
  try {
    const resp = yield call(SituationApi.get);
    yield put({ type: type.GET_SITUATIONS_SUCCESS, payload: resp.data });
  } catch (e) {
    const message = e?.response?.data?.message || '';

    yield put({ type: type.GET_SITUATIONS_FAILED, message });
  }
}

function* getAvailableSituationsByAccount(action) {
  try {
    const resp = yield call(SituationApi.getAvailablePosts);
    yield put({
      type: type.GET_SITUATION_AVAILABLE_SUCCESS,
      payload: resp.data,
    });
  } catch (e) {
    const message = e?.response?.data?.message || '';

    yield put({ type: type.GET_SITUATION_AVAILABLE_FAILED, message });
  }
}

function* getSituationById(action) {
  try {
    const resp = yield call(SituationApi.getSituationById, action.payload);
    yield put({ type: type.GET_SITUATION_SUCCESS, payload: resp.data });
  } catch (e) {
    const message = e?.response?.data?.message || '';

    yield put({ type: type.GET_SITUATION_FAILED, message });
  }
}

function* createSituation(action) {
  try {
    const resp = yield call(SituationApi.create, action.payload);
    yield put({ type: type.CREATE_SITUATION_SUCCESS, payload: resp.data });
    const { status } = resp.data;
    const path = getPath(status);
    const resp1 = yield call(SituationApi.get);
    yield put({ type: type.GET_SITUATIONS_SUCCESS, payload: resp1.data });
    action.navigate(path);
  } catch (e) {
    const message = e?.response?.data?.message || '';
    console.log(e);
    yield put({ type: type.CREATE_SITUATION_FAILED, message });
  }
}

function* updateSituation(action) {
  try {
    const resp = yield call(SituationApi.update, action.payload);
    yield put({ type: type.UPDATE_SITUATION_SUCCESS, payload: resp.data });
    const { status } = resp.data;
    const path = getPath(status);
    const resp1 = yield call(SituationApi.get);
    yield put({ type: type.GET_SITUATIONS_SUCCESS, payload: resp1.data });
    action.navigate(path);
  } catch (e) {
    const message = e?.response?.data?.message || '';
    console.log(e);
    yield put({ type: type.UPDATE_SITUATION_FAILED, message });
  }
}

const getPath = (status) => {
  const prefix = '/post';

  switch (status) {
    case 'publish':
      return `${prefix}/published`;
    case 'processing':
      return `${prefix}/in-process`;
    case 'completed':
      return `${prefix}/completed`;
    default:
      return `${prefix}/drafted`;
  }
};

function* createSituationSaga() {
  yield takeEvery(type.CREATE_SITUATION_REQUESTED, createSituation);
}

function* updateSituationSaga() {
  yield takeEvery(type.UPDATE_SITUATION_REQUESTED, updateSituation);
}

function* getSituationByAccountSaga() {
  yield takeEvery(type.GET_SITUATIONS_REQUESTED, getSituationByAccount);
}

function* getSituationByIdSaga() {
  yield takeEvery(type.GET_SITUATION_REQUESTED, getSituationById);
}

function* getAvailableSituationsByAccountSaga() {
  yield takeEvery(
    type.GET_SITUATION_AVAILABLE_REQUESTED,
    getAvailableSituationsByAccount
  );
}
export {
  createSituationSaga,
  updateSituationSaga,
  getSituationByAccountSaga,
  getSituationByIdSaga,
  getAvailableSituationsByAccountSaga,
};

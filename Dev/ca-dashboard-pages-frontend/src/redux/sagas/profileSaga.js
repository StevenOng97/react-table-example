import { call, put, takeEvery } from 'redux-saga/effects';
import { ProfileApi } from '../../api/profile';
import * as type from '../types';

function* getProfile(action) {
  try {
    const resp = yield call(ProfileApi.get);
    yield put({ type: type.GET_PROFILE_SUCCESS, payload: resp.data.profile });
  } catch (e) {
    const message = e?.response?.data?.message || '';

    yield put({ type: type.GET_PROFILE_FAILED, message });
  }
}

function* createProfile(action) {
  try {
    const resp = yield call(ProfileApi.create, action.payload);
    yield put({ type: type.CREATE_PROFILE_SUCCESS, payload: resp.data });
  } catch (e) {
    const message = e?.response?.data?.message || '';
    console.log(e);
    yield put({ type: type.CREATE_PROFILE_FAILED, message });
  }
}

function* updateProfile(action) {
  try {
    const resp = yield call(ProfileApi.update, action.payload);
    yield put({ type: type.UPDATE_PROFILE_SUCCESS, payload: resp.data });
  } catch (e) {
    const message = e?.response?.data?.message || '';
    console.log(e);
    yield put({ type: type.UPDATE_PROFILE_FAILED, message });
  }
}

function* profileSaga() {
  yield takeEvery(type.GET_PROFILE_REQUESTED, getProfile);
}

function* createProfileSaga() {
  yield takeEvery(type.CREATE_PROFILE_REQUESTED, createProfile);
}

function* updateProfileSaga() {
  yield takeEvery(type.UPDATE_PROFILE_REQUESTED, updateProfile);
}

export { profileSaga, createProfileSaga, updateProfileSaga };

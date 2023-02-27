import { call, put, takeEvery } from 'redux-saga/effects';
import { UserApi } from '../../api/auth';
import { setCurrentUser } from '../../helpers/helpers';
import * as type from '../types';

function* login(action) {
  try {
    const resp = yield call(UserApi.login, action.payload);
    setCurrentUser(JSON.stringify(resp.data));
    yield put({ type: 'LOGIN_SUCCESS', payload: resp.data });
  } catch (e) {
    const message = e?.response.data?.message;

    yield put({ type: 'LOGIN_FAILED', message });
  }
}

function* refreshToken() {
  try {
    const resp = yield call(UserApi.refreshToken);
    setCurrentUser(JSON.stringify(resp.data));
    yield put({ type: 'LOGIN_SUCCESS', payload: resp.data });
  } catch (e) {
    const message = e?.response.data?.message;

    yield put({ type: 'LOGIN_FAILED', message });
  }
}

function* userSaga() {
  yield takeEvery('LOGIN_REQUESTED', login);
}

function* refreshTokenSaga() {
  yield takeEvery(type.REFRESH_TOKEN_REQUESTED, refreshToken);
}

export { userSaga, refreshTokenSaga };

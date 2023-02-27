import { all } from 'redux-saga/effects';
import {
  profileSaga,
  createProfileSaga,
  updateProfileSaga,
} from './profileSaga';
import {
  createSituationSaga,
  getSituationByAccountSaga,
  getSituationByIdSaga,
  updateSituationSaga,
  getAvailableSituationsByAccountSaga
} from './situationSaga';
import { userSaga, refreshTokenSaga } from './userSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    refreshTokenSaga(),
    profileSaga(),
    createProfileSaga(),
    updateProfileSaga(),
    getSituationByAccountSaga(),
    getSituationByIdSaga(),
    getAvailableSituationsByAccountSaga(),
    createSituationSaga(),
    updateSituationSaga(),
  ]);
}

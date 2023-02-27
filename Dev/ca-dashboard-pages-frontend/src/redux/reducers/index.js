import { combineReducers } from 'redux';
import profile from './profile';
import user from './user';
import situation from './situation';

const rootReducer = combineReducers({
  user,
  profile,
  situation
});

export default rootReducer;
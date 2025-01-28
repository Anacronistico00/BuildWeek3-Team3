import { combineReducers, configureStore } from '@reduxjs/toolkit';
import experiencesReducer from '../reducers/experiences';
import tokenReducer from '../reducers/token';
import userReducer from '../reducers/user';
import setProfileReducer from '../reducers/profile';

const mainReducer = combineReducers({
  experiences: experiencesReducer,
  token: tokenReducer,
  user: userReducer,
  profile: setProfileReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;

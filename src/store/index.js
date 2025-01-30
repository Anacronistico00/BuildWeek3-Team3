import { combineReducers, configureStore } from '@reduxjs/toolkit';
import experiencesReducer from '../reducers/experiences';
import tokenReducer from '../reducers/token';
import userReducer from '../reducers/user';
import setProfileReducer from '../reducers/profile';
import { submitTextReducer } from '../reducers/submitTextReducer';
import jobsReducer from '../reducers/jobsReducer';
import jobsCategoryReducer from '../reducers/jobsCategoryReducer';

const mainReducer = combineReducers({
  experiences: experiencesReducer,
  token: tokenReducer,
  user: userReducer,
  profileInfo: setProfileReducer,
  text: submitTextReducer,
  jobs: jobsReducer,
  jobsCategory: jobsCategoryReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import experiencesReducer from '../reducers/experiences';
import tokenReducer from '../reducers/token';
import userReducer from '../reducers/user';

const mainReducer = combineReducers({
  experiences: experiencesReducer,
  token: tokenReducer,
  user: userReducer
})

const store = configureStore({
  reducer: mainReducer,
});

export default store;

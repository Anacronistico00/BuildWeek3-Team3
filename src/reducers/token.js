import { SET_TOKEN } from '../actions/setProfileAction';

const initialState = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDI1ZTE2ZjYzNTAwMTVmZWNiNzYiLCJpYXQiOjE3Mzc5NjYxNzQsImV4cCI6MTczOTE3NTc3NH0.C54YDV4poWgVTe4vEBdnfY19L0nYPNupc4t-FcJn1m8',
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default tokenReducer;

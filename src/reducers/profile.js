import { SET_PROFILE } from '../actions/profileInfo';

const initialState = {
  profileInfo: null,
};

const setProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profileInfo: action.payload,
      };
    default:
      return state;
  }
};

export default setProfileReducer;

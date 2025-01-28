import { RETRIEVE_PROFILE, RETRIEVE_USER } from '../actions/setProfileAction';
const initialState = {
  user_logged: true,
  profile: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_USER:
      return {
        ...state,
        user_logged: action.payload,
      };
    case RETRIEVE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

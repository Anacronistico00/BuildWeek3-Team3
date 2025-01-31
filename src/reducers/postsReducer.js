import { GET_POSTS } from '../actions/GetPosts';

const initialState = {
  posts: null,
};

const setPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default setPostsReducer;

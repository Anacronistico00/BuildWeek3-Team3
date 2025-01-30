import { CATEGORY_SEARCH } from '../actions/Jobs';

const initialState = { jobs: [] };

const jobsCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_SEARCH:
      return {
        ...state,
        jobs: action.payload,
      };
  }
  return state;
};

export default jobsCategoryReducer;

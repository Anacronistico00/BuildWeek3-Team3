import { AGENCY_SEARCH } from "../actions/Jobs";

const initialState = { jobs: [] };

const jobsAgencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGENCY_SEARCH:
      return {
        ...state,
        jobs: action.payload,
      };
  }
  return state;
};

export default jobsAgencyReducer;

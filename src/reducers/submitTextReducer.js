const initialState = {
  text: '',
};

export const submitTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_COMMENT':
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  text: "",
}

const postCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_COMMENT:
      return {
        ...state,
        text: action.payload,
      }
  }
}

export default postCommentReducer

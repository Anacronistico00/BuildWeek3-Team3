import { useDispatch } from "react-redux"

export const SUBMIT_COMMENT = "SUBMIT_COMMENT"

export const submitComment = (text) => {
  const dispatch = useDispatch()
  return dispatch({
    type: SUBMIT_COMMENT,
    payload: text,
  })
}

export const GET_COMMENTS = 'GET_COMMENTS';

export const GetComments = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGRkNTBlYTI4NjAwMTUyOGI5NTgiLCJpYXQiOjE3MzgzMTQzOTgsImV4cCI6MTczOTUyMzk5OH0.cFyUagIPza1RaPsEvSVmDa_F3b-CIfjcJNfE3Fhmjtg',
        },
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);

    dispatch({
      type: GET_COMMENTS,
      payload: data,
    });
  } catch (error) {
    console.error('Errore nel recupero dei commenti:', error);
  }
};

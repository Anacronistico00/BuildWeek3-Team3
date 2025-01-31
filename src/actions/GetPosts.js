export const GET_POSTS = 'GET_POSTS';

export const fetchPosts = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('SONO DATA', data);
      dispatch({
        type: GET_POSTS,
        payload: data,
      });
    } catch (error) {
      console.log('Errore nella fetch dei dati', error);
    }
  };
};

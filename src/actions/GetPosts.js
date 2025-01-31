export const GET_POSTS = 'GET_POSTS';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/',
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDI1ZTE2ZjYzNTAwMTVmZWNiNzYiLCJpYXQiOjE3Mzc5NjYxNzQsImV4cCI6MTczOTE3NTc3NH0.C54YDV4poWgVTe4vEBdnfY19L0nYPNupc4t-FcJn1m8`,
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
        payload: data.reverse().slice(0, 50),
      });
    } catch (error) {
      console.log('Errore nella fetch dei dati', error);
    }
  };
};

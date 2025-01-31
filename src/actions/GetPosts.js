export const GET_POSTS = 'GET_POSTS';

export const fetchPosts = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('SONO DATA', data);
        dispatchEvent();
        dispatch({
          type: GET_POSTS,
          payload: data,
        });
      } else {
        throw new Error('Errore nel recupero dei dati');
      }
    } catch (error) {
      console.log('Errore nella fetch dei dati', error);
    }
  };
};

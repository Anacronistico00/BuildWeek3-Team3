export const SET_PROFILE = 'SET_PROFILE';

export const getProfileInfo = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
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
      console.log(data);

      dispatch({
        type: SET_PROFILE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const RETRIEVE_EXPERIENCES = 'RETRIEVE_EXPERIENCES';
export const SET_TOKEN = 'SET_TOKEN';
export const RETRIEVE_USER = 'RETRIEVE_USER';
export const RETRIEVE_PROFILE = 'RETRIEVE_PROFILE';

export const RetrieveUserAction = (token) => {
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
      if (response.ok) {
        const user = await response.json();
        console.log(user);
        dispatch({
          type: RETRIEVE_USER,
          payload: user,
        });
      } else {
        throw new Error('ooops');
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const RetrieveExperiencesAction = (token, user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user}/experiences`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const experiences = await response.json();
        console.log(experiences);
        dispatch({
          type: RETRIEVE_EXPERIENCES,
          payload: experiences,
        });
      } else {
        throw new Error('ooops');
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const SetTokenAction = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const RetrieveProfileAction = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const user = await response.json();
        console.log(user);
        dispatch({
          type: RETRIEVE_PROFILE,
          payload: user,
        });
      } else {
        throw new Error('ops');
      }
    } catch (err) {
      console.log(err);
    }
  };
};

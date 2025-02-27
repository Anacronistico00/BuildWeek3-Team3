export const GET_JOBS = 'GET_JOBS';

export const GetJobs = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://strive-benchmark.herokuapp.com/api/jobs?search=query'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data.data);

    dispatch({
      type: GET_JOBS,
      payload: data.data,
    });
  } catch (error) {
    console.error('Errore nel recupero dei lavori:', error);
  }
};

export const CATEGORY_SEARCH = 'CATEGORY_SEARCH';

export const CategorySearch = (category) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=20`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data.data);

    dispatch({
      type: GET_JOBS,
      payload: data.data,
    });
  } catch (error) {
    console.error('Errore nel recupero dei lavori:', error);
  }
};
export const AGENCY_SEARCH = 'AGENCY_SEARCH';

export const AgencySearch = (azienda) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?company=${azienda}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data.data);

    dispatch({
      type: AGENCY_SEARCH,
      payload: data.data,
    });
  } catch (error) {
    console.error('Errore nel recupero dei lavori:', error);
  }
};

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

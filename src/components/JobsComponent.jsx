import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetJobs } from '../actions/Jobs';
import { Card } from 'react-bootstrap';

const JobsComponent = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const [job, setJob] = useState(false); // Usa stato locale per il singolo lavoro

  useEffect(() => {
    dispatch(GetJobs()); // Assicurati che dispatch venga chiamato correttamente
    setJob(true);
  }, [dispatch]);

  return (
    <div>
      <Card>
        {job ? (
          jobs.slice(0, 10).map((job) => (
            <div key={job._id}>
              <h2>{job.title}</h2>
              <hr />
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </Card>
    </div>
  );
};

export default JobsComponent;

// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GetJobs } from '../actions/Jobs';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const JobsComponent = () => {
  const jobs = useSelector((state) => state.jobs.jobs);

  return (
    <div>
      <Card>
        {jobs.slice(0, 10).map((job) => (
          <div key={job._id}>
            <h2 id='jobTitle'>{job.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
            <hr />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default JobsComponent;

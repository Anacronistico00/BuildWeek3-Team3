import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetJobs } from '../actions/Jobs';
import { Card, Row, Col } from 'react-bootstrap';

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
        <div className=' px-3 divAcaso'>
          <h2 className='titleJobCards'>Offerte di lavoro per te:</h2>
          <p className=' subtitleJobsCard'>
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidature, ricerche e salvataggi
          </p>
        </div>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {job ? (
            jobs.slice(0, 10).map((job) => (
              <div key={job._id} className=' px-3 d-flex  pt-1'>
                <img
                  src='https://placecats.com/neo_banana/300/300'
                  className='workImage'
                />
                <div className=' container-fluid'>
                  <h2 id='jobTitle'>{job.title}</h2>
                  <p>
                    {job.company_name} · {job.candidate_required_location}
                  </p>
                  <Row>
                    <Col xs={8}>
                      <p className=' text-start'>
                        Category: {job.category}, job type:{' '}
                        {job.job_type.replaceAll('_', ' ')}
                      </p>
                    </Col>
                    <Col xs={4}>
                      <p className=' text-end'>
                        {job.publication_date.slice(0, 10)}
                      </p>
                    </Col>
                  </Row>
                  <hr />
                </div>
              </div>
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      </Card>
      <Card className=' mt-3'>
        <div className=' px-3 divAcaso'>
          <h2 className='titleJobCards'>
            Altre offerte di lavoro che potrebbero interessarti:
          </h2>
          <p className=' subtitleJobsCard'>
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidature, ricerche e salvataggi
          </p>
        </div>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {job ? (
            jobs.slice(11, 21).map((job) => (
              <div key={job._id} className=' px-3 d-flex  pt-1'>
                <img
                  src='https://placecats.com/neo_2/300/300'
                  className='workImage'
                />
                <div className=' container-fluid'>
                  <h2 id='jobTitle'>{job.title}</h2>
                  <p>
                    {job.company_name} · {job.candidate_required_location}
                  </p>
                  <Row>
                    <Col xs={8}>
                      <p className=' text-start'>
                        Category: {job.category}, job type:{' '}
                        {job.job_type.replaceAll('_', ' ')}
                      </p>
                    </Col>
                    <Col xs={4}>
                      <p className=' text-end'>
                        {job.publication_date.slice(0, 10)}
                      </p>
                    </Col>
                  </Row>
                  <hr />
                </div>
              </div>
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default JobsComponent;

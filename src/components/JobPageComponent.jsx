import { Col, Container, Row } from 'react-bootstrap';
import JobsComponent from './JobsComponent';
import JobsAside from './JobsAsideComponent';
import JobsCategory from './JobsCategory';

const JobPageComponent = () => {
  return (
    <Container className='mt-5 pt-3 px-5'>
      <Row className='mx-5'>
        <Col xs={12} md={3}>
          <JobsAside />
        </Col>
        <Col xs={12} md={9}>
        <JobsCategory />
          <JobsComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default JobPageComponent;

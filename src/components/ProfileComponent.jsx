import { Col, Container, Row } from 'react-bootstrap';
import PersonalInfoComponent from './PersonalInfoComponent';

const ProfileComponent = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={9}>
          <PersonalInfoComponent />
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileComponent;

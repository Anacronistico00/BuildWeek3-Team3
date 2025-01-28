import { Col, Container, Row } from 'react-bootstrap';
import PersonalInfoComponent from './PersonalInfoComponent';
import SideBar from './SideBar';
import AnalisiComponent from './AnalisiComponent';
import InformationComponent from './InformationComponent';
import ActivityComponent from './ActivityComponent';
import Experiences from './Experiences';
import Study from './Study';
import Skills from './Skills';

const ProfileComponent = () => {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={9}>
          <PersonalInfoComponent />
          <AnalisiComponent />
          <InformationComponent />
          <ActivityComponent />
          {/* <Experiences /> */}
          <Study />
          <Skills />
        </Col>
        <Col xs={12} md={3} className=' p-0 side-bar mt-4'>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileComponent;

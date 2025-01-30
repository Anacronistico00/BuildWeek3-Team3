import { Col, Container, Row } from 'react-bootstrap';
import SideBarRightHome from './SideBarRightHome';
import RightSide from './RightSideHome';
import PostsComponent from './PostsComponent';

function HomeComponent() {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={2} className=' p-0 mt-4'>
          <RightSide />
        </Col>
        <Col xs={12} md={7} className=' p-0 mt-4 px-3'>
          <PostsComponent />
        </Col>
        <Col xs={12} md={3} className=' p-0 mt-4'>
          <SideBarRightHome />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;

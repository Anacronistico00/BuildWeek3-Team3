import { Col, Container, Row } from 'react-bootstrap';
import SideBarRightHome from './SideBarRightHome';
import PostsComponent from './PostsComponent';
import RightSideHome from './RightSideHome';

function HomeComponent() {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={2} className=' p-0 mt-4'>
          <Container fluid className='p-3 bg-white mb-2 cards-home'>
            <RightSideHome />
          </Container>
        </Col>
        <Col xs={12} md={7} className=' p-0 mt-4 px-3'>
          <Container fluid className=' p-3 bg-white mb-2 cards-home'>
            <PostsComponent />
          </Container>
        </Col>
        <Col xs={12} md={3} className=' p-0 mt-4'>
          <SideBarRightHome />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import NavBarDiProva from './components/NavBarDiProva';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from './components/SideBar';


function App() {
  return (
    <BrowserRouter>
      <NavBarDiProva />
      <Container className='main-container mt-4'>
        <Row className=' px-4'>
          <Col xs={12} md={6} lg={9} className=' ps-0 pe-4'>
            <Container fluid className=' bg-black'>
              ciaoo
            </Container>
          </Col>
          <Col xs={12} md={6} lg={3} className=' p-0 side-bar'>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;

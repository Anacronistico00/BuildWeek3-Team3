import {
  Navbar,
  Form,
  Container,
  FormControl,
  Nav,
  NavDropdown,
  Col,
  Row,
} from 'react-bootstrap';

import {
  Bell,
  BriefcaseFill,
  ChatDotsFill,
  Grid3x3,
  HouseDoorFill,
  PeopleFill,
  Search,
} from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

const NavBarComponent = function () {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      {profile && (
        <Navbar className='p-0' fixed='top' bg='light' expand='lg'>
          <Container>
            <Row className='w-100'>
              <Col xs={2} md={3} className='d-flex align-items-center'>
                <Navbar.Brand href='#'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png'
                    width='36'
                    height='36'
                    className='d-inline-block align-top'
                    alt='LinkedIn logo'
                  />
                </Navbar.Brand>

                {/* Barra di ricerca */}
                <Form className='mr-auto d-flex align-items-center'>
                  <div className='input-group'>
                    <Search className='search-icon' />
                    <FormControl
                      type='text'
                      placeholder='Search'
                      className='d-none d-md-block me-2'
                    />
                  </div>
                </Form>
              </Col>
              <Col xs={8} md={6}>
                {/* Menu di navigazione */}
                <Nav className='d-flex flex-row align-items-center justify-content-evenly'>
                  <Nav.Link
                    href='#home'
                    className='d-flex flex-column align-items-center mx-2'
                  >
                    <HouseDoorFill className='HomeIcons' />
                    <p className='SubsIcon d-none d-md-block'>Home</p>
                  </Nav.Link>

                  <Nav.Link
                    href='#network'
                    className='d-flex flex-column align-items-center mx-2'
                  >
                    <PeopleFill className='HomeIcons' />
                    <p className='SubsIcon d-none d-md-block'>Rete</p>
                  </Nav.Link>

                  <Nav.Link
                    href='#jobs'
                    className='d-flex flex-column align-items-center mx-2'
                  >
                    <BriefcaseFill className='HomeIcons' />
                    <p className='SubsIcon d-none d-md-block'>Lavoro</p>
                  </Nav.Link>

                  <Nav.Link
                    href='#messaging'
                    className='d-flex flex-column align-items-center mx-2'
                  >
                    <ChatDotsFill className='HomeIcons' />
                    <p className='SubsIcon d-none d-md-block'>Messaggistica</p>
                  </Nav.Link>

                  <Nav.Link
                    href='#notifications'
                    className='d-flex flex-column align-items-center mx-2'
                  >
                    <Bell className='HomeIcons' />
                    <p className='SubsIcon d-none d-md-block'>Notifiche</p>
                  </Nav.Link>

                  {/* Profilo Utente */}
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='ImgProfile'>
                      <img
                        src={profile.image}
                        alt='imagine profilo'
                        className='rounded-circle'
                        width='20'
                        height='20'
                      />
                    </div>
                    <span className=' nameTab'>Tu</span>
                    <NavDropdown>
                      <NavDropdown.Item href='#profile'>
                        Profilo
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#settings'>
                        Impostazioni
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#logout'>Esci</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </Nav>
              </Col>
              {/* Sezione "Per le Aziende" */}
              <Col xs={2} md={3} className='border-start ms-0'>
                <Nav.Link href='#work' className='text-center'>
                  <Grid3x3 className='HomeIcons mb-0 mt-2' />
                  <p className='SubsIcon d-none d-md-block'>Per le aziende</p>
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavBarComponent;

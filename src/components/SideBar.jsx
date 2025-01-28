import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import '../style/SideBar.css';
import { HiOutlinePencil } from 'react-icons/hi2';

function SideBar() {
  return (
    <>
      <Container fluid className=' p-3 bg-white card first-card mb-2'>
        <Row>
          <Col xs={12} className=' position-relative'>
            <h2 className=' mb-1'>
              Lingua del profilo{' '}
              <span>
                <HiOutlinePencil size={22} className='pencil' />
              </span>
            </h2>
            <p>Italiano</p>
          </Col>
        </Row>
        <hr className='mt-0' />
        <Row>
          <Col xs={12} className=' position-relative'>
            <h2 className='mb-1'>
              Profilo pubblico e URL{' '}
              <span>
                <HiOutlinePencil size={22} className='pencil' />
              </span>
            </h2>
            <p className='m-0'>www.linkedin.com/in/giacomo-rigo-7a1504225</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className=' p-0 card mb-2 overflow-hidden'>
        <img src='/src/assets/img/ads.png' alt='Pubblicità' width='100%' />
      </Container>
      <Container fluid className='card third-card mb-2 bg-white p-0'>
        <Container fluid className=' p-3 pb-1'>
          <Row>
            <Col xs={12}>
              <h2 className=' mb-1'>Altri profili per te</h2>
            </Col>
          </Row>
          <Row className='p-0 g-0'>
            <Col xs={12}>
              <ListGroup>
                <ListGroup.Item className='px-0'>
                  <Container fluid className='p-0'>
                    <Row className='p-0'>
                      <Col xs={3}>
                        <img
                          src='/src/assets/img/imgProfilo.png'
                          alt='immagine profilo'
                          width='100%'
                        />
                      </Col>
                      <Col xs={9} className='ps-0 pt-1'>
                        <h3 className='m-0'>
                          Nome Cognome <span>&bull; 3°</span>
                        </h3>
                        <p className='m-0'>Studente presso Epicode</p>
                        <button className='mt-2 px-3'>
                          Visualizza profilo
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
                <ListGroup.Item className='px-0'>
                  <Container fluid className='p-0'>
                    <Row className='p-0'>
                      <Col xs={3}>
                        <img
                          src='/src/assets/img/imgProfilo.png'
                          alt='immagine profilo'
                          width='100%'
                        />
                      </Col>
                      <Col xs={9} className='ps-0 pt-1'>
                        <h3 className='m-0'>
                          Nome Cognome <span>&bull; 3°</span>
                        </h3>
                        <p className='m-0'>Studente presso Epicode</p>
                        <button className='mt-2 px-3'>
                          Visualizza profilo
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
                <ListGroup.Item className='px-0'>
                  <Container fluid className='p-0'>
                    <Row className='p-0'>
                      <Col xs={3}>
                        <img
                          src='/src/assets/img/imgProfilo.png'
                          alt='immagine profilo'
                          width='100%'
                        />
                      </Col>
                      <Col xs={9} className='ps-0 pt-1'>
                        <h3 className='m-0'>
                          Nome Cognome <span>&bull; 3°</span>
                        </h3>
                        <p className='m-0'>Studente presso Epicode</p>
                        <button className='mt-2 px-3'>
                          Visualizza profilo
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <hr className='m-0' />
        <Container
          fluid
          className='p-0 d-flex justify-content-center align-content-center button-mostra'
        >
          <h3 className='my-2'>Mostra tutto</h3>
        </Container>
      </Container>
      <Container fluid className='card third-card mb-2 bg-white p-3'>
        <Row>
          <Col xs={12}>
            <h2 className=' mb-1'>Esplora i profili Premium</h2>
          </Col>
        </Row>
        <Row className='p-0 g-0'>
          <Col xs={12}>
            <ListGroup>
              <ListGroup.Item className='px-0'>
                <Container fluid className='p-0'>
                  <Row className='p-0'>
                    <Col xs={3}>
                      <img
                        src='/src/assets/img/imgProfilo.png'
                        alt='immagine profilo'
                        width='100%'
                      />
                    </Col>
                    <Col xs={9} className='ps-0 pt-1'>
                      <h3 className='m-0'>
                        Nome Cognome <span>&bull; 3°</span>
                      </h3>
                      <p className='m-0'>Studente presso Epicode</p>
                      <button className='mt-2 px-3'>Visualizza profilo</button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item className='px-0'>
                <Container fluid className='p-0'>
                  <Row className='p-0'>
                    <Col xs={3}>
                      <img
                        src='/src/assets/img/imgProfilo.png'
                        alt='immagine profilo'
                        width='100%'
                      />
                    </Col>
                    <Col xs={9} className='ps-0 pt-1'>
                      <h3 className='m-0'>
                        Nome Cognome <span>&bull; 3°</span>
                      </h3>
                      <p className='m-0'>Studente presso Epicode</p>
                      <button className='mt-2 px-3'>Visualizza profilo</button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item className='px-0'>
                <Container fluid className='p-0'>
                  <Row className='p-0'>
                    <Col xs={3}>
                      <img
                        src='/src/assets/img/imgProfilo.png'
                        alt='immagine profilo'
                        width='100%'
                      />
                    </Col>
                    <Col xs={9} className='ps-0 pt-1'>
                      <h3 className='m-0'>
                        Nome Cognome <span>&bull; 3°</span>
                      </h3>
                      <p className='m-0'>Studente presso Epicode</p>
                      <button className='mt-2 px-3'>Visualizza profilo</button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container fluid className='card third-card mb-2 bg-white p-0'>
        <Container fluid className=' p-3 pb-1'>
          <Row>
            <Col xs={12}>
              <h2 className=' mb-1'>Persone che potresti conoscere</h2>
            </Col>
          </Row>
          <Row className='p-0 g-0'>
            <Col xs={12}>
              <ListGroup>
                <ListGroup.Item className='px-0'>
                  <Container fluid className='p-0'>
                    <Row className='p-0'>
                      <Col xs={3}>
                        <img
                          src='/src/assets/img/imgProfilo.png'
                          alt='immagine profilo'
                          width='100%'
                        />
                      </Col>
                      <Col xs={9} className='ps-0 pt-1'>
                        <h3 className='m-0'>
                          Nome Cognome <span>&bull; 3°</span>
                        </h3>
                        <p className='m-0'>Studente presso Epicode</p>
                        <button className='mt-2 px-3'>
                          Visualizza profilo
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
                <ListGroup.Item className='px-0'>
                  <Container fluid className='p-0'>
                    <Row className='p-0'>
                      <Col xs={3}>
                        <img
                          src='/src/assets/img/imgProfilo.png'
                          alt='immagine profilo'
                          width='100%'
                        />
                      </Col>
                      <Col xs={9} className='ps-0 pt-1'>
                        <h3 className='m-0'>
                          Nome Cognome <span>&bull; 3°</span>
                        </h3>
                        <p className='m-0'>Studente presso Epicode</p>
                        <button className='mt-2 px-3'>
                          Visualizza profilo
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
                <ListGroup.Item className='px-0'>
                  <Container fluid className='p-0'>
                    <Row className='p-0'>
                      <Col xs={3}>
                        <img
                          src='/src/assets/img/imgProfilo.png'
                          alt='immagine profilo'
                          width='100%'
                        />
                      </Col>
                      <Col xs={9} className='ps-0 pt-1'>
                        <h3 className='m-0'>
                          Nome Cognome <span>&bull; 3°</span>
                        </h3>
                        <p className='m-0'>Studente presso Epicode</p>
                        <button className='mt-2 px-3'>
                          Visualizza profilo
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <hr className='m-0' />
        <Container
          fluid
          className='p-0 d-flex justify-content-center align-content-center button-mostra'
        >
          <h3 className='my-2'>Mostra tutto</h3>
        </Container>
      </Container>
      <Container fluid className=' p-0 card mb-2 overflow-hidden'>
        <img src='/src/assets/img/ads.png' alt='Pubblicità' width='100%' />
      </Container>
    </>
  );
}

export default SideBar;

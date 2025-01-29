import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import '../style/SideBar.css';
import { HiOutlinePencil } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../actions/setProfileAction';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhNDQ0YWU4NWJhZDAwMTUyOWIzYmUiLCJpYXQiOjE3MzgxNjMyNzQsImV4cCI6MTczOTM3Mjg3NH0.oDqTDwEMo7xK9dzkHjlrFPDKjsiV_Onzkpk7-9A_-qo'
const url = "https://striveschool-api.herokuapp.com/api/profile/"
let randomProfiles = [];


function SideBar() {
  const dispatch = useDispatch()
  const [isLoading, getIsLoading] = useState(true)

  const handleProfileClick = (e, profile) => {
    e.preventDefault()
    dispatch(setProfile(profile))
  };


  const getProfiles = async () => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (!res.ok) {
        throw new Error(`Errore ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      for (let i = 0; i < 9; i++) {
        randomProfiles.push(data[Math.floor(Math.random() * data.length)])
      }
      console.log(randomProfiles)
      getIsLoading(false)
    } catch (err) {
      console.error("Errore nel caricamento dei profili", err);
      throw err;
    }
  }

  useEffect(() => {
    getProfiles()
  }, []
  );

  return (
    <>
      {!isLoading &&
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
                              src={randomProfiles[0].image}
                              alt='immagine profilo'
                              width='100%'
                            />
                          </Col>
                          <Col xs={9} className='ps-0 pt-1'>
                            <h3 className='m-0'>
                              {randomProfiles[0].name} {randomProfiles[0].surname} <span>&bull; 3°</span>
                            </h3>
                            <p className='m-0'>{randomProfiles[0].title || "Nessun titolo"}</p>
                            <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[0])}>
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
                              src={randomProfiles[1].image}
                              alt='immagine profilo'
                              width='100%'
                            />
                          </Col>
                          <Col xs={9} className='ps-0 pt-1'>
                            <h3 className='m-0'>
                              {randomProfiles[1].name} {randomProfiles[1].surname} <span>&bull; 3°</span>
                            </h3>
                            <p className='m-0'>{randomProfiles[1].title || "Nessun titolo"}</p>
                            <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[1])}>
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
                              src={randomProfiles[2].image}
                              alt='immagine profilo'
                              width='100%'
                            />
                          </Col>
                          <Col xs={9} className='ps-0 pt-1'>
                            <h3 className='m-0'>
                              {randomProfiles[2].name} {randomProfiles[2].surname} <span>&bull; 3°</span>
                            </h3>
                            <p className='m-0'>{randomProfiles[2].title || "Nessun titolo"}</p>
                            <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[2])}>
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
                            src={randomProfiles[3].image}
                            alt='immagine profilo'
                            width='100%'
                          />
                        </Col>
                        <Col xs={9} className='ps-0 pt-1'>
                          <h3 className='m-0'>
                            {randomProfiles[3].name} {randomProfiles[3].surname} <span>&bull; 3°</span>
                          </h3>
                          <p className='m-0'>{randomProfiles[3].title || "Nessun titolo"}</p>
                          <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[3])}>Visualizza profilo</button>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                  <ListGroup.Item className='px-0'>
                    <Container fluid className='p-0'>
                      <Row className='p-0'>
                        <Col xs={3}>
                          <img
                            src={randomProfiles[4].image}
                            alt='immagine profilo'
                            width='100%'
                          />
                        </Col>
                        <Col xs={9} className='ps-0 pt-1'>
                          <h3 className='m-0'>
                            {randomProfiles[4].name} {randomProfiles[4].surname} <span>&bull; 3°</span>
                          </h3>
                          <p className='m-0'>{randomProfiles[4].title || "Nessun titolo"}</p>
                          <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[4])}>Visualizza profilo</button>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                  <ListGroup.Item className='px-0'>
                    <Container fluid className='p-0'>
                      <Row className='p-0'>
                        <Col xs={3}>
                          <img
                            src={randomProfiles[5].image}
                            alt='immagine profilo'
                            width='100%'
                          />
                        </Col>
                        <Col xs={9} className='ps-0 pt-1'>
                          <h3 className='m-0'>
                            {randomProfiles[5].name} {randomProfiles[5].surname} <span>&bull; 3°</span>
                          </h3>
                          <p className='m-0'>{randomProfiles[5].title || "Nessun titolo"}</p>
                          <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[5])}>Visualizza profilo</button>
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
                              src={randomProfiles[6].image}
                              alt='immagine profilo'
                              width='100%'
                            />
                          </Col>
                          <Col xs={9} className='ps-0 pt-1'>
                            <h3 className='m-0'>
                              {randomProfiles[6].name} {randomProfiles[6].surname} <span>&bull; 3°</span>
                            </h3>
                            <p className='m-0'>{randomProfiles[6].title || "Nessun titolo"}</p>
                            <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[6])}>
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
                              src={randomProfiles[7].image}
                              alt='immagine profilo'
                              width='100%'
                            />
                          </Col>
                          <Col xs={9} className='ps-0 pt-1'>
                            <h3 className='m-0'>
                              {randomProfiles[7].name} {randomProfiles[7].surname} <span>&bull; 3°</span>
                            </h3>
                            <p className='m-0'>{randomProfiles[7].title || "Nessun titolo"}</p>
                            <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[7])}>
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
                              src={randomProfiles[8].image}
                              alt='immagine profilo'
                              width='100%'
                            />
                          </Col>
                          <Col xs={9} className='ps-0 pt-1'>
                            <h3 className='m-0'>
                              {randomProfiles[8].name} {randomProfiles[8].surname} <span>&bull; 3°</span>
                            </h3>
                            <p className='m-0'>{randomProfiles[8].title || "Nessun titolo"}</p>
                            <button className='mt-2 px-3' onClick={(e) => handleProfileClick(e, randomProfiles[8])}>
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
      }
    </>
  );
}

export default SideBar;

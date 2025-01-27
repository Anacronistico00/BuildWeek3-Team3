import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../actions/setProfileAction';
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Modal,
  Row,
} from 'react-bootstrap';
import { CameraFill, PencilFill } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

const PersonalInfoComponent = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showProfileModifyModal, setShowProfileModifyModal] = useState(false);

  const handleProfileModalClose = () => setShowProfileModal(false);
  const handleProfileModalShow = () => setShowProfileModal(true);

  const handleProfileModifyModalClose = () => setShowProfileModifyModal(false);
  const handleProfileModifyModalShow = () => setShowProfileModifyModal(true);

  const getProfileInfo = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDI1ZTE2ZjYzNTAwMTVmZWNiNzYiLCJpYXQiOjE3Mzc5NjYxNzQsImV4cCI6MTczOTE3NTc3NH0.C54YDV4poWgVTe4vEBdnfY19L0nYPNupc4t-FcJn1m8`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      dispatch(setProfile(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('Fetching profile info');

    getProfileInfo();
  }, [dispatch]);

  return (
    <>
      {profile && (
        <Card className='rounded-4 mt-4 position-relative'>
          <Card.Img
            variant='top'
            src='public\copertina.jpg'
            className='coverImage'
          />
          <CameraFill className='btnCamera'></CameraFill>
          <Card.Body className='pt-0'>
            <Card.Title>
              <div className=' position-relative'>
                <img
                  src={profile.image}
                  alt='Profile Image'
                  className='profileImage'
                />
              </div>
              <div className='d-flex justify-content-end'>
                <Button
                  variant='trasparent'
                  className='px-2 rounded-5 mt-3 btnModify'
                >
                  <PencilFill></PencilFill>
                </Button>
              </div>
              <Container fluid>
                <Row>
                  <Col>
                    <div>
                      <h2 className='name'>
                        {profile.name} {profile.surname}
                      </h2>
                      <p className='username'>@{profile.username}</p>
                      <p>--</p>
                    </div>
                  </Col>
                  <Col>
                    <ul className='mt-0'>
                      <li className='list-unstyled'>
                        <Button variant='transparent' className='p-2'>
                          <img
                            src='public\epicode.png'
                            alt='Stats'
                            className='workplaceImage'
                          />
                          <span className='fw-bold text-secondary workplaceInfo'>
                            Epic Education SRL
                          </span>
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='areaInfo'>
                      <span className='text-secondary'>{profile.area} </span>
                      <span className='contactsInfo text-primary'>
                        Informazioni di Contatto
                      </span>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Card.Title>
            <Container fluid className='p-0'>
              <Dropdown className='custom-dropdown d-inline-block'>
                <Dropdown.Toggle className='rounded-5 fw-bold'>
                  Disponibile per
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>
                    <h6>Selezione del personale</h6>
                    <p>
                      Fai sapere che stai facendo selezione e attrai candidati
                      qualificati
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    <h6>Cambiare lavoro</h6>
                    <p>
                      Mostra ai recruiter e ad altri che sei disponibile a
                      lavorare
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    <h6>Servizi offerti</h6>
                    <p>
                      Metti in risalto i servizi che offri, così i nuovi clienti
                      potranno trovarti
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                variant='transparent'
                className='btnProfileModify rounded-5 border-2 border-primary m-2 text-primary fw-bold'
                onClick={handleProfileModifyModalShow}
              >
                Aggiungi sezione del profilo
              </Button>

              <Dropdown className='custom-dropdown d-inline-block'>
                <Dropdown.Toggle
                  variant='transparent'
                  className='btnResource rounded-5 border-2 border-secondary m-2 fw-bold'
                >
                  Risorse
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>
                    <h6>Selezione del personale</h6>
                    <p>
                      Fai sapere che stai facendo selezione e attrai candidati
                      qualificati
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    <h6>Cambiare lavoro</h6>
                    <p>
                      Mostra ai recruiter e ad altri che sei disponibile a
                      lavorare
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    <h6>Servizi offerti</h6>
                    <p>
                      Metti in risalto i servizi che offri, così i nuovi clienti
                      potranno trovarti
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                variant='transparent'
                className='btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold'
                onClick={handleProfileModalShow}
              >
                Migliora profilo
              </Button>
            </Container>
          </Card.Body>
        </Card>
      )}

      <Modal show={showProfileModal} onHide={handleProfileModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Migliora il tuo Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contenuto della modale per Migliora Profilo</p>
        </Modal.Body>
      </Modal>

      <Modal
        show={showProfileModifyModal}
        onHide={handleProfileModifyModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi sezione del profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contenuto della modale per Aggiungi sezione del profilo</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PersonalInfoComponent;

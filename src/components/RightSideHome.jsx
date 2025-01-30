import { Container, Card, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoPersonAddSharp } from 'react-icons/io5';
import { FaBookmark } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BiNews } from 'react-icons/bi';
import { MdEvent } from 'react-icons/md';

function RightSideHome() {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      {profile.profile && (
        <Card className='cardSide'>
          <Link to={'/profile'}>
            <Card.Img
              variant='top'
              src='public\copertina.jpg'
              className='coverImage2'
            />
          </Link>
          <Card.Body className='pt-0'>
            <Card.Title>
              <div className=' position-relative'>
                <Link to={'/profile'}>
                  <img
                    style={{ cursor: 'pointer' }}
                    src={profile.profile.image}
                    alt='Profile Image'
                    className='profileImage2'
                  />
                </Link>
              </div>
            </Card.Title>
            <Card.Text>
              <Container fluid className=' justify-content-start'>
                <div className='divVuoto'></div>
                <Link to={'/profile'}>
                  <div className=' mb-2'>
                    <h3 className='nameCardSide'>
                      {profile.profile.name} {profile.profile.surname}
                    </h3>
                    <p className='bioText'>{profile.profile.bio}</p>
                    <p className=' fs-6 text-secondary'>
                      {profile.profile.area}
                    </p>
                    <a className='p-2 text-start azienda'>
                      <p>
                        <img
                          src='public\epicode.png'
                          alt='Stats'
                          className='workplaceImage2 me-1'
                        />
                        <span className='fw-bold text-secondary overflow'>
                          Epic Education SRL
                        </span>
                      </p>
                    </a>
                  </div>
                </Link>
                <div className=' border-secondary border-top border-bottom'>
                  <a className='container-fluid '>
                    <Row className=' w-100 justify-content-between'>
                      <Col xs={10} className='oltre'>
                        <p className=' text-start collegamenti overflow'>
                          Collegamenti
                          <span className=' d-block espandi text-start'>
                            Espandi la tua rete
                          </span>
                        </p>
                      </Col>
                      <Col xs={2}>
                        <IoPersonAddSharp className=' fs-5' />
                      </Col>
                      {/* <Col xs={12} className="oltre">
                        <p className="premiumTitle text-start">
                          Espandi la tua rete
                        </p>
                      </Col> */}
                    </Row>
                  </a>
                </div>
                <div className=' mt-2'>
                  <h3 className='premiumTitle'>
                    Acquisisci nuove competenze con Premium
                  </h3>
                  <a className='premium'>
                    <p>👑 Prova Premium per 0 EUR</p>
                  </a>
                </div>
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      <Card className='cardSide mt-2 p-3'>
        <ul className=' list-unstyled'>
          <li>
            <a className='linkAlbero'>
              <FaBookmark /> Elementi salvati
            </a>
          </li>
          <li>
            <a className='linkAlbero'>
              <HiUserGroup /> Gruppi
            </a>
          </li>
          <li>
            <a className='linkAlbero'>
              <BiNews /> Newsletter
            </a>
          </li>
          <li>
            <a className='linkAlbero'>
              <MdEvent /> Eventi
            </a>
          </li>
        </ul>
      </Card>
    </>
  );
}

export default RightSideHome;

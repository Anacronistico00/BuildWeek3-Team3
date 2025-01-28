import { Container, Row, Col, Card } from 'react-bootstrap';
import { HiOutlinePencil } from 'react-icons/hi2';
import { GoPlus } from 'react-icons/go';

const Experiences = () => {
  return (
    <Container className='px-0 mt-3'>
      <Row>
        <Col xs={12}>
          <Card className='p-4'>
            <Row className=' align-items-end mb-3'>
              <Col xs={'auto'}>
                <h5>Esperienza</h5>
              </Col>
              <Col xs={'auto'} className='ms-auto d-flex'>
                <a
                  href='#'
                  className='pencil-icon d-flex align-items-center justify-content-center'
                >
                  <GoPlus className='fs-2 text-decoration-none text-black' />
                </a>
                <a
                  href='#'
                  className='pencil-icon d-flex align-items-center justify-content-center'
                >
                  <HiOutlinePencil className='fs-4 text-decoration-none text-black' />
                </a>
              </Col>
            </Row>
            <div id='experiences'>
              <Row className='mb-3 g-1'>
                <Col xs={2} xl={1}>
                  <a href='#'>
                    <img
                      src='../../public/assets/images/apple.png'
                      alt=''
                      width={50}
                      height={50}
                    />
                  </a>
                </Col>
                <Col xs={9} xl={10}>
                  <h6 className='mb-0'>Ruolo</h6>
                  <p className='mb-0'>Nome Azienda</p>
                  <p className='text-muted'> Data</p>
                </Col>
              </Row>
            </div>
            <hr />
            <div id='experiences'>
              <Row className='mb-3 g-1'>
                <Col xs={2} xl={1}>
                  <a href='#'>
                    <img
                      src='../../public/assets/images/apple.png'
                      alt=''
                      width={50}
                      height={50}
                    />
                  </a>
                </Col>
                <Col xs={9} xl={10}>
                  <h6 className='mb-0'>Ruolo</h6>
                  <p className='mb-0'>Nome Azienda</p>
                  <p className='text-muted'> Data</p>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;

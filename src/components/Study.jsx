import { Container, Col, Row, Card } from 'react-bootstrap';
import { GoPlus } from 'react-icons/go';
import { HiOutlinePencil } from 'react-icons/hi2';

const Study = () => {
  return (
    <Container className='px-0 mt-3'>
      <Row>
        <Col xs={12}>
          <Card className='p-4'>
            <Row className=' align-items-end mb-3'>
              <Col xs={'auto'}>
                <h5>Formazione</h5>
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
              <Row className='mb-1 g-1'>
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
                  <a href='#' className='mb-0 fw-bolder study-link'>
                    Università
                  </a>
                  <p className='mb-0'>Data</p>
                </Col>
              </Row>
            </div>
            <hr />
            <div id='experiences'>
              <Row className='mb-1 g-1'>
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
                  <a href='#' className='mb-0 study-link fw-bolder'>
                    Liceo
                  </a>
                  <p className='mb-0'>Data</p>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Study;

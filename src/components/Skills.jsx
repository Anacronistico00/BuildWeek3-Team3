import { Container, Row, Col, Card } from 'react-bootstrap';
import { HiOutlinePencil } from 'react-icons/hi2';
import { GoPlus } from 'react-icons/go';

const Skills = () => {
  return (
    <Container className='px-0 mt-3'>
      <Card className='p-4'>
        <Row>
          <Col xs={12}>
            <Row className=' align-items-end mb-3'>
              <Col xs={'auto'}>
                <h5>Competenze</h5>
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
                <Col xs={9} xl={10}>
                  <a href='#' className='fw-bolder fs-6 study-link'>
                    Leadership
                  </a>
                  <div className='mt-2'>
                    <a href='#'>
                      <img
                        src='../../public/assets/images/apple.png'
                        alt=''
                        width={25}
                        height={25}
                      />
                    </a>{' '}
                    CEO Apple 2015-2020
                  </div>
                </Col>
              </Row>
            </div>
            <hr />
            <div id='experiences'>
              <Row className='mb-1 g-1'>
                <Col xs={9} xl={10}>
                  <a href='#' className='fw-bolder study-link fs-6'>
                    Microsoft Office
                  </a>
                  <div className='mt-2'>
                    <a href='#'>
                      <img
                        src='../../public/assets/images/apple.png'
                        alt=''
                        width={25}
                        height={25}
                      />
                    </a>{' '}
                    CEO Apple 2015-2020
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Skills;

import { HiOutlinePencil } from 'react-icons/hi2';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import ModalPost from './ModalPostComponent';
import { useState } from 'react';

const ActivityComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Container className='px-0 mt-3'>
        <Card className='mt-3'>
          <div className='px-4 pt-4 flex-grow-1 mb-3'>
            <Row>
              <Col className='text-right'>
                <h5 className='mb-0'>Attività</h5>
                <a href='#' className='fw-bolder mb-0 fs-6 follower-link'>
                  50 Follower
                </a>
              </Col>
              <Col className='text-end d-flex justify-content-end'>
                <Button
                  variant='outline-primary'
                  className='btn-md mb-2 me-3 rounded-pill'
                  onClick={handleShowModal}
                >
                  Crea un post
                </Button>
                <a
                  href='#'
                  className='pencil-icon d-flex align-items-center justify-content-center'
                >
                  <HiOutlinePencil className='fs-4 text-decoration-none text-black' />
                </a>
              </Col>
            </Row>
            <Row className='g-2 mt-3'>
              <Col sm={12}>
                <>
                  <h5 className='mb-0 fs-6'>
                    Non hai ancora pubblicato niente
                  </h5>
                  <p>I post che condividi appariranno qui.</p>
                </>
              </Col>
            </Row>
          </div>
          <button
            type='button'
            className='rounded-top-0 btn btn-light border-top '
          >
            Mostra tutte le attività <i className='bi bi-arrow-right'></i>
          </button>
        </Card>
      </Container>
      <ModalPost
        show={showModal}
        handleClose={handleCloseModal}
        image='../../public/assets/images/avatar.png'
        name='Avatar'
        subtitle='Web developer'
      />
    </>
  );
};

export default ActivityComponent;

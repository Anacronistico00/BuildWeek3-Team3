import { Button, Modal, Row, Col, FloatingLabel, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ModalPost = ({ show, handleClose }) => {
  const profile = useSelector((state) => state.profile);
  return (
    <>
      {profile && (
        <Modal show={show} onHide={handleClose} className='modalePost modal-lg'>
          <Modal.Header closeButton>
            <Modal.Title>
              <Button variant='transparent' className='p-2 transparent-button '>
                <Row className='align-items-center hover-row '>
                  <Col md={2}>
                    <img
                      src={profile.image}
                      alt='Profile'
                      className='circular-image'
                      style={{ width: '40px', borderRadius: '50%' }}
                    />
                  </Col>
                  <Col className='ms-4 d-flex align-items-center justify-content-between'>
                    <div>
                      <h4 className='mb-0 text-black text-start ms-2'>
                        {profile.name} {profile.surname}
                      </h4>
                      <p className='mb-0 fs-6 text-black text-start ms-2'>
                        Pubblica: Chiunque
                      </p>
                    </div>
                  </Col>
                </Row>
              </Button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId='floatingTextarea2'
              label='Di cosa vorresti Parlare?'
            >
              <Form.Control
                as='textarea'
                placeholder='Di cosa vorresti Parlare?'
                style={{ height: '250px' }}
              />
            </FloatingLabel>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              Salva modifiche
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ModalPost;

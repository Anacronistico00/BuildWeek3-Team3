import { Button, Modal, Row, Col, FloatingLabel, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import postComment from '../actions/postcomment';
import { EmojiSmile, Youtube } from 'react-bootstrap-icons';
import { FaRegCalendarAlt, FaRegImage } from 'react-icons/fa';
import { LuPlus } from 'react-icons/lu';
import { useRef, useState } from 'react';

const ModalPost = ({ show, handleClose, fetchPosts }) => {
  const profile = useSelector((state) => state.profileInfo);
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  const token = useSelector((state) => state.token);

  const handleSubmit = () => {
    dispatch(postComment(token.token, text.text, selectedFile));
    fetchPosts();
    handleClose();
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewSrc(URL.createObjectURL(file));
  };

  const fileInputRef = useRef(null);

  return (
    <>
      {profile.profileInfo && (
        <Modal show={show} onHide={handleClose} className='modalePost modal-lg'>
          <Modal.Header closeButton>
            <Modal.Title>
              <Button variant='transparent' className='p-2 transparent-button '>
                <Row className='align-items-center hover-row '>
                  <Col md={2}>
                    <img
                      src={profile.profileInfo.image}
                      alt='Profile'
                      className='circular-image'
                      style={{ width: '40px', borderRadius: '50%' }}
                    />
                  </Col>
                  <Col className='ms-4 d-flex align-items-center justify-content-between'>
                    <div>
                      <h4 className='mb-0 text-black text-start ms-2'>
                        {profile.profileInfo.name} {profile.profileInfo.surname}
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
                value={text.text}
                onChange={(e) => {
                  dispatch({
                    type: 'SUBMIT_COMMENT',
                    payload: e.target.value,
                  });
                }}
              />
            </FloatingLabel>
            <EmojiSmile className='fs-3 mt-2 text-secondary'></EmojiSmile>
            <div className='fs-3 text-secondary'>
              <input
                type='file'
                id='fileInput'
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <label htmlFor='fileInput'>
                <FaRegImage />
              </label>
              <Youtube className='ms-3'></Youtube>
              <FaRegCalendarAlt className='ms-3' />
              <LuPlus className='ms-3' />
            </div>
            {previewSrc && <img src={previewSrc} alt='Preview' />}
          </Modal.Body>

          <Modal.Footer>
            <Button variant='primary' onClick={handleSubmit}>
              Salva modifiche
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ModalPost;

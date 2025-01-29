import { Button, Modal, Row, Col, FloatingLabel, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import postComment from "../actions/postcomment"

const ModalPost = ({ show, handleClose }) => {
  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const token = useSelector((state) => state.token)

  const handleSubmit = () => {
    dispatch(postComment(text, token))
  }

  return (
    <>
      {profile.profile && (
        <Modal show={show} onHide={handleClose} className="modalePost modal-lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <Button variant="transparent" className="p-2 transparent-button ">
                <Row className="align-items-center hover-row ">
                  <Col md={2}>
                    <img
                      src={profile.profile.image}
                      alt="Profile"
                      className="circular-image"
                      style={{ width: "40px", borderRadius: "50%" }}
                    />
                  </Col>
                  <Col className="ms-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="mb-0 text-black text-start ms-2">
                        {profile.profile.name} {profile.profile.surname}
                      </h4>
                      <p className="mb-0 fs-6 text-black text-start ms-2">
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
              controlId="floatingTextarea2"
              label="Di cosa vorresti Parlare?"
            >
              <Form.Control
                as="textarea"
                placeholder="Di cosa vorresti Parlare?"
                style={{ height: "250px" }}
                value={text.text}
                onChange={(e) => {
                  dispatch({
                    type: SUBMIT_COMMENT,
                    payload: e.target.value,
                  })
                }}
              />
            </FloatingLabel>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Salva modifiche
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}

export default ModalPost

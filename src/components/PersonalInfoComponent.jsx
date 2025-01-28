import { useDispatch, useSelector } from "react-redux"
import { setProfile } from "../actions/setProfileAction"
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Modal,
  Row,
} from "react-bootstrap"
import {
  Arrow90degRight,
  BookmarkFill,
  CameraFill,
  Download,
  Envelope,
  InfoSquareFill,
  Linkedin,
  Newspaper,
  PersonFill,
} from "react-bootstrap-icons"
import { useEffect, useState } from "react"
import { HiOutlinePencil } from "react-icons/hi2"

const PersonalInfoComponent = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)

  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showProfileModifyModal, setShowProfileModifyModal] = useState(false)
  const [showContactsModal, setShowProfile] = useState(false)

  const handleProfileModalShow = () => setShowProfileModal(true)
  const handleProfileModalClose = () => setShowProfileModal(false)

  const handleProfileModifyModalShow = () => setShowProfileModifyModal(true)
  const handleProfileModifyModalClose = () => setShowProfileModifyModal(false)

  const handleContactsModalShow = () => setShowProfile(true)
  const handleContactsModalClose = () => setShowProfile(false)

  const getProfileInfo = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OTdiMDhlOWNjZDAwMTUyMGFiNzYiLCJpYXQiOjE3MzgwNTM1NTIsImV4cCI6MTczOTI2MzE1Mn0.u0gNt__uvOYtZBYVOt8IlqpQlft-e79Gkfn9HyT_ecY`,
          },
        }
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      console.log(data)
      dispatch(setProfile(data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log("Fetching profile info")

    getProfileInfo()
  }, [dispatch])

  return (
    <>
      {profile && (
        <Card className="rounded-4 mt-4 position-relative">
          <Card.Img
            variant="top"
            src="public\copertina.jpg"
            className="coverImage"
          />
          <CameraFill className="btnCamera"></CameraFill>
          <Card.Body className="pt-0">
            <Card.Title>
              <div className=" position-relative">
                <img
                  src={profile.image}
                  alt="Profile Image"
                  className="profileImage"
                />
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  variant="trasparent"
                  className="px-2 rounded-5 mt-3 btnModify"
                >
                  <HiOutlinePencil className="fs-4"></HiOutlinePencil>
                </Button>
              </div>
              <Container fluid>
                <Row>
                  <Col>
                    <div>
                      <h2 className="name">
                        {profile.name} {profile.surname}
                      </h2>
                      <p className="username">@{profile.username}</p>
                      <p>--</p>
                    </div>
                  </Col>
                  <Col>
                    <ul className="mt-0">
                      <li className="list-unstyled">
                        <Button variant="transparent" className="p-2">
                          <img
                            src="public\epicode.png"
                            alt="Stats"
                            className="workplaceImage"
                          />
                          <span className="fw-bold text-secondary workplaceInfo">
                            Epic Education SRL
                          </span>
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="areaInfo">
                      <span className="text-secondary">{profile.area} </span>
                      <span
                        onClick={handleContactsModalShow}
                        className="contactsInfo text-primary"
                      >
                        Informazioni di Contatto
                      </span>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Card.Title>
            <Container fluid className="p-0">
              <Dropdown className="custom-dropdown d-inline-block">
                <Dropdown.Toggle className="rounded-5 fw-bold py-0">
                  Disponibile per
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <h6>Selezione del personale</h6>
                    <p>
                      Fai sapere che stai facendo selezione e attrai candidati
                      qualificati
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <h6>Cambiare lavoro</h6>
                    <p>
                      Mostra ai recruiter e ad altri che sei disponibile a
                      lavorare
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <h6>Servizi offerti</h6>
                    <p>
                      Metti in risalto i servizi che offri, così i nuovi clienti
                      potranno trovarti
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                variant="transparent"
                className="btnProfileModify rounded-5 border-2 border-primary m-2 text-primary fw-bold py-0"
                onClick={handleProfileModifyModalShow}
              >
                Aggiungi sezione del profilo
              </Button>

              <Dropdown className="custom-dropdown2 d-inline-block">
                <Dropdown.Toggle
                  variant="transparent"
                  className="btnResource rounded-5 border-2 border-secondary m-2 fw-bold py-0"
                >
                  Risorse
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <Arrow90degRight className="fs-5"></Arrow90degRight>
                    <h6>Invia il profilo in un messaggio</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Download className="fs-5"></Download>
                    <h6>Salva come PDF</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <PersonFill className="fs-5"></PersonFill>
                    <h6>Informazioni demografiche personali</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <BookmarkFill className="fs-5"></BookmarkFill>
                    <h6>Elementi salvati</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Newspaper className="fs-5"></Newspaper>
                    <h6>Attività</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <InfoSquareFill className="fs-5"></InfoSquareFill>
                    <h6>Informazioni su questo profilo</h6>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                variant="transparent"
                className="btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold py-0"
                onClick={handleProfileModalShow}
              >
                Migliora profilo
              </Button>
            </Container>
          </Card.Body>
        </Card>
      )}

      {profile && (
        <Modal show={showContactsModal} onHide={handleContactsModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {profile.name} {profile.surname}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className=" profileInfoHeader d-flex justify-content-between">
              <p className="profileInfo fs-5">Informazioni di contatto</p>
              <HiOutlinePencil className="fs-4"></HiOutlinePencil>
            </div>
            <div className="profileInfoBody mt-3">
              <div className="ms-2 d-flex">
                <Linkedin className="fs-4"></Linkedin>
                <div className="ms-2 mb-3">
                  <h6>Il tuo profilo</h6>
                  <p className="profileLink text-primary">
                    Linkedin.com/in/{profile.name}-{profile.surname}-
                    {profile._id}
                  </p>
                </div>
              </div>
              <div className="ms-2 d-flex">
                <Envelope className="fs-4"></Envelope>
                <div className="ms-2">
                  <h6>Email</h6>
                  <p className="profileLink text-primary">{profile.email}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
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
  )
}

export default PersonalInfoComponent

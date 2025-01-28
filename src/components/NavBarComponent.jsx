import {
  Navbar,
  Form,
  Container,
  FormControl,
  Nav,
  NavDropdown,
  Col,
  Row,
  Dropdown,
  Button,
  DropdownItemText,
} from "react-bootstrap"

import {
  Bell,
  BriefcaseFill,
  ChatDotsFill,
  Grid3x3,
  HouseDoorFill,
  PeopleFill,
  Search,
} from "react-bootstrap-icons"
import { GoPlus } from "react-icons/go"
import { useSelector } from "react-redux"

const NavBarComponent = function () {
  const profile = useSelector((state) => state.profile)

  return (
    <>
      {profile && (
        <Navbar className="p-0" fixed="top" bg="light" expand="lg">
          <Container className="position-relative">
            <Row className="w-100">
              <Col xs={2} lg={3} className="d-flex align-items-center">
                <Navbar.Brand href="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png"
                    width="36"
                    height="36"
                    className="d-inline-block align-top"
                    alt="LinkedIn logo"
                  />
                </Navbar.Brand>

                {/* Barra di ricerca */}
                <Form className="mr-auto d-flex align-items-center">
                  <div className="input-group">
                    <Search className="search-icon" />
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="d-none d-md-block me-2"
                    />
                  </div>
                </Form>
              </Col>
              <Col
                xs={8}
                lg={6}
                className=" d-flex justify-content-evenly justify-content-lg-between"
              >
                {/* Menu di navigazione */}
                <div className="d-flex flex-row align-items-center justify-content-between mx-3  ">
                  <Nav.Link
                    href="#home"
                    className="d-flex flex-column align-items-center mx-3 mx-lg-4 "
                  >
                    <HouseDoorFill className="HomeIcons" />
                    <p className="SubsIcon d-none d-md-block">Home</p>
                  </Nav.Link>

                  <Nav.Link
                    href="#network"
                    className="d-flex flex-column align-items-center mx-3 mx-lg-4 "
                  >
                    <PeopleFill className="HomeIcons" />
                    <p className="SubsIcon d-none d-md-block">Rete</p>
                  </Nav.Link>

                  <Nav.Link
                    href="#jobs"
                    className="d-flex flex-column align-items-center mx-3 mx-lg-4 "
                  >
                    <BriefcaseFill className="HomeIcons" />
                    <p className="SubsIcon d-none d-md-block">Lavoro</p>
                  </Nav.Link>

                  <Nav.Link
                    href="#messaging"
                    className="d-flex flex-column align-items-center mx-3 mx-lg-4 "
                  >
                    <ChatDotsFill className="HomeIcons" />
                    <p className="SubsIcon d-none d-md-block">Messaggistica</p>
                  </Nav.Link>

                  <Nav.Link
                    href="#notifications"
                    className="d-flex flex-column align-items-center mx-3 mx-lg-4 "
                  >
                    <Bell className="HomeIcons" />
                    <p className="SubsIcon d-none d-md-block">Notifiche</p>
                  </Nav.Link>

                  {/* Profilo Utente */}

                  <div className="d-flex justify-content-center align-items-center">
                    <div className="ImgProfile">
                      <img
                        src={profile.image}
                        alt="imagine profilo"
                        className="rounded-circle"
                        width="20"
                        height="20"
                      />
                    </div>
                    <span className=" nameTab">Tu</span>
                  </div>

                  <NavDropdown className="text-center" drop="start">
                    <Dropdown.Item>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={profile.image}
                          alt="Profile"
                          style={{
                            width: "50px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <div>
                          <strong>
                            {profile.name} {profile.surname}
                          </strong>
                          <p></p>
                        </div>
                      </div>
                    </Dropdown.Item>

                    <Button
                      variant="transparent"
                      className="btnProfile rounded-5 border-2 border-primary text-primary fw-bold mx-1 py-0"
                      href="#/Profilo"
                    >
                      Visualizza profilo
                    </Button>
                    <Dropdown.Divider />
                    <DropdownItemText>
                      <h6>Account</h6>
                    </DropdownItemText>
                    <Dropdown.Item href="#/action-2">
                      <p className="smallertext text-secondary">
                        Prova 1 mese di Premium per 0 EUR
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/Impostazioni">
                      Impostazioni e privacy
                    </Dropdown.Item>
                    <Dropdown.Item href="#Guida">Guida</Dropdown.Item>
                    <Dropdown.Item href="#Lingua">Lingua</Dropdown.Item>
                    <Dropdown.Divider />
                    <DropdownItemText>
                      <h6>Gestisci</h6>
                    </DropdownItemText>
                    <Dropdown.Item href="#/Post">Post e attività</Dropdown.Item>
                    <Dropdown.Item href="#/Account">
                      Account per la pubblicazione di offerte di lavoro
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/Esci">Esci</Dropdown.Item>
                  </NavDropdown>
                </div>
              </Col>
              {/* Sezione "Per le Aziende" */}
              <Col xs={2} lg={3} className="border-start ms-0 ">
                <div className=" text-center">
                  <Grid3x3 className="HomeIcons mb-0 mt-2" />
                  <p className="SubsIcon d-none d-md-block">Per le aziende</p>
                </div>
                <NavDropdown className="navbar-dropdown" drop={"start"}>
                  <Container fluid>
                    <Row>
                      <Col xs={12} lg={6}>
                        <h5>Le mie app</h5>
                        <p>
                          <a href="#">Trova Nuovi Clienti</a>
                        </p>
                        <p>
                          <a href="#">Gruppi</a>
                        </p>
                        <h5>Talent</h5>
                        <p>
                          <a href="#">Talents Insight</a>
                        </p>
                        <p>
                          <a href="#">Pubblica un'offerta di lavoro</a>
                        </p>
                        <h5>Vendite</h5>
                        <p>
                          <a href="#">Marketplace dei servizi</a>
                        </p>
                        <h5>Marketing</h5>
                        <p>
                          <a href="#">Pubblicizza</a>
                        </p>
                        <h5>Learning</h5>
                        <p>
                          <a href="#">Learning</a>
                        </p>
                      </Col>
                      <Col xs={12} lg={6}>
                        <h3>Scopri altro per il business</h3>
                        <div className="mb-1">
                          <a href="#" className="linksChange">
                            Assumi su Linkedin
                            <p className="smallerTitle">
                              Trova Attrai e assumi
                            </p>
                          </a>
                        </div>

                        <div className="mb-1">
                          <a href="#" className="linksChange">
                            Vendi con Linkedin
                            <p className="smallerTitle">
                              Sblocca nuove opportunità di vendita
                            </p>
                          </a>
                        </div>

                        <div className="mb-1">
                          <a href="#" className="linksChange">
                            Offerta di lavoro gratuita
                            <p className="smallerTitle">
                              Ottieni rapidamente candidati qualificati
                            </p>
                          </a>
                        </div>

                        <div className="mb-1">
                          <a href="#" className="linksChange">
                            Fai pubblicità su Linkedin
                            <p className="smallerTitle">
                              Acquisisci clienti e fai conoscere la tua azienda
                            </p>
                          </a>
                        </div>

                        <div className="mb-1">
                          <a href="#" className="linksChange">
                            Inizia con Premium
                            <p className="smallerTitle">
                              Amplia e sfrutta la tua rete
                            </p>
                          </a>
                        </div>

                        <div className="mb-1">
                          <a href="#" className="linksChange">
                            Impara con Linkedin
                            <p className="smallerTitle">
                              Corsi per formare i tuoi dipendenti
                            </p>
                          </a>
                        </div>

                        <div className="mb-1">
                          <a href="#" className="linksChange">
                            Admin Center
                            <p className="smallerTitle">
                              Gestisci i dettagli di fatturazione e account
                            </p>
                          </a>
                        </div>

                        <div className=" d-flex my-3">
                          <a className="linksChange">
                            Crea una pagina aziendale{" "}
                          </a>
                          <GoPlus className="fs-2 text-decoration-none text-black" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
              </Col>
            </Row>
          </Container>
        </Navbar>
      )}
    </>
  )
}

export default NavBarComponent

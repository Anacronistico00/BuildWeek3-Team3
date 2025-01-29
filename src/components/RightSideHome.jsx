import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";
function RightSide() {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      {profile.profile && (
        <Card className="cardSide">
          <Card.Img
            variant="top"
            src="public\copertina.jpg"
            className="coverImage2"
          />
          <Card.Body className="pt-0">
            <Card.Title>
              <div className=" position-relative">
                <Link to={"/profile"}>
                  <img
                    style={{ cursor: "pointer" }}
                    src={profile.profile.image}
                    alt="Profile Image"
                    className="profileImage2"
                  />
                </Link>
              </div>
            </Card.Title>
            <Card.Text>
              <Container fluid className=" justify-content-start">
                <div className="divVuoto"></div>
                <h3 className="nameCardSide">
                  {profile.profile.name} {profile.profile.surname}
                </h3>
                <p>--</p>
                <a className="p-2 text-start azienda">
                  <p>
                    <img
                      src="public\epicode.png"
                      alt="Stats"
                      className="workplaceImage2 me-1"
                    />
                    <span className="fw-bold text-secondary">
                      Epic Education SRL
                    </span>
                  </p>
                </a>
                <div className=" border-secondary border-top border-bottom">
                  <Button variant="transparent" className="p-2 container-fluid">
                    <Row className=" w-100 justify-content-between">
                      <Col xs={6}>
                        <p className=" text-start">Collegamenti</p>
                      </Col>
                      <Col xs={6}>
                        <IoPersonAddSharp />
                      </Col>
                    </Row>
                  </Button>
                </div>
                <div>
                  <h3 className="premiumTitle">
                    Acquisisci nuove competenze con Premium
                  </h3>
                  <a className="premium">
                    <p>👑 Prova Premium per 10.000 EUR</p>
                  </a>
                </div>
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default RightSide;

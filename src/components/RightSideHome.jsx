import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RightSide() {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      {profile.profile && (
        <Card className="rounded-4 mt-4">
          <Card.Img
            variant="top"
            src="public\copertina.jpg"
            className="coverImage"
          />
          <Card.Body className="pt-0">
            <Card.Title>
              <div className=" position-relative">
                <Link to={"/profile"}>
                  <img
                    style={{ cursor: "pointer" }}
                    src={profile.profile.image}
                    alt="Profile Image"
                    className="profileImage"
                  />
                </Link>
              </div>
            </Card.Title>
            <Card.Text>
              <Container fluid className="">
                <Row>
                  <Col xs={12}>
                    <h2 className="name">
                      {profile.profile.name} {profile.profile.surname}
                    </h2>
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
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default RightSide;

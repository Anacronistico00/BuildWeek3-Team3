import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function LeftSide() {
  const profile = useSelector((state) => state.profileInfo);

  return (
    <>
      {profile.profileInfo && (
        <Card className="">
          <Link to={"/profile"}>
            <Card.Img
              variant="top"
              src="public\copertina.jpg"
              className="coverImage2"
            />
          </Link>
          <Card.Body className="pt-0">
            <Card.Title>
              <div className=" position-relative">
                <Link to={"/profile"}>
                  <img
                    style={{ cursor: "pointer" }}
                    src={profile.profileInfo.image}
                    alt="Profile Image"
                    className="profileImage2"
                  />
                </Link>
              </div>
            </Card.Title>
            <Card.Text>
              <Container fluid className=" justify-content-start">
                <div className="divVuoto"></div>
                <Link to={"/profile"}>
                  <div className=" mb-2">
                    <h3 className="nameCardSide">
                      {profile.profileInfo.name} {profile.profileInfo.surname}
                    </h3>
                    <p className="bioText">{profile.profileInfo.bio}</p>
                    <p className=" fs-6 text-secondary">
                      {profile.profileInfo.area}
                    </p>
                    <a className="p-2 text-start azienda">
                      <p>
                        <img
                          src="public\epicode.png"
                          alt="Stats"
                          className="workplaceImage2 me-1"
                        />
                        <span className="fw-bold text-secondary overflow">
                          Epic Education SRL
                        </span>
                      </p>
                    </a>
                  </div>
                </Link>
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default LeftSide;

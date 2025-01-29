import NavBarComponent from "./NavBarComponent";
import { Col, Row } from "react-bootstrap";
import RightSide from "./RightSideHome";

function HomeComponent() {
  return (
    <>
      <NavBarComponent />
      <Row>
        <Col xs={12} md={3}>
          <RightSide />
        </Col>
        {/* <Col xs={12} md={7}>
          <div></div>
        </Col>
        <Col xs={12} md={3}>
          <div></div>
        </Col> */}
      </Row>
    </>
  );
}

export default HomeComponent;

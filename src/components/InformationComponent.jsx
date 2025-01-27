import { Container, Card, Col, Row } from 'react-bootstrap';
import { HiOutlinePencil } from "react-icons/hi2";

const InformationComponent = () => {
  
  return (
    <Container className='px-0 mt-3'>
    <Row>
      <Col xs={12}>
        <Card className='w-100 mt-3'>
          <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
              <Card.Title className='mb-2'>Informazioni</Card.Title>
              <a href='#' className='pencil-icon d-flex align-items-center justify-content-center'>
                <HiOutlinePencil className='fs-4 text-decoration-none pencil' />
              </a>
            </div>
            <Card.Text>
              <p>Le informazioni del profilo verrano visualizzate qui</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>

  );
};

export default InformationComponent;

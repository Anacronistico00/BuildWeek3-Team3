import { Container, Col, Row, Card } from 'react-bootstrap';

function AnalisiComponent() {
  return (
    <Container className='px-0 mt-3'>
      <Card className='d-flex mt-3 w-100'>
        <div className='p-4'>
          <Row>
            <Col>
              <h5 className='mb-0'>Analisi</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='text-secondary'>
                <i className='bi bi-eye-fill'></i>&nbsp; Solo per te
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Row className='g-0'>
                <Col md={1}>
                  <a href='#'>
                    <i className='bi bi-people-fill text-decoration-none text-dark fs-5'></i>
                  </a>
                </Col>
                <Col md={11}>
                  <a href='#' className='mb-0 fw-bolder fs-5 custom-link'>
                    950 visualizzazioni del profilo
                  </a>
                  <p>Scopri chi ha visitato il tuo profilo.</p>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row className='g-0'>
                <Col md={1}>
                  <a href='#'>
                    <i className='bi bi-bar-chart-fill text-decoration-none text-dark fs-5'></i>
                  </a>
                </Col>
                <Col md={11}>
                  <a href='#' className='mb-0 fw-bolder fs-5 custom-link'>
                    520 impressioni del post
                  </a>
                  <p>Scopri chi sta interagendo con i tuoi post.</p>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row className='g-0'>
                <Col md={1}>
                  <a href='#'>
                    <i className='bi bi-search text-decoration-none text-dark fs-5'></i>
                  </a>
                </Col>
                <Col md={11}>
                  <a href='#' className='mb-0 fw-bolder fs-5 custom-link'>
                    27 comparse nei motori di ricerca
                  </a>
                  <p>Vedi quante volte compari nei risultati di ricerca.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <button
          type='button'
          className='rounded-top-0 btn btn-light border-top '
        >
          Mostra tutte le analisi <i className='bi bi-arrow-right'></i>
        </button>
      </Card>
    </Container>
  );
}

export default AnalisiComponent;

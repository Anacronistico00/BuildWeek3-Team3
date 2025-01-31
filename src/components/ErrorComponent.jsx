import { Container } from 'react-bootstrap';

const ErrorComponent = () => {
  return (
    <Container className='text-center mt-5 pt-3'>
      <img src='public\404.png' alt='' className='w-25' />
      <div className='d-flex justify-content-center align-items-center'>
        <h1 className='text-danger m-0'>404:</h1>
        <h2 className='ms-3'>Page not found!</h2>
      </div>
    </Container>
  );
};

export default ErrorComponent;

import { CategorySearch } from '../actions/Jobs';
import { useCallback, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const JobsCategory = () => {
  const dispatch = useDispatch();
  const [research, setResearch] = useState('');
  const setResearchCallback = useCallback(
    (value) => {
      setResearch(value);
    },
    [setResearch]
  );
  useEffect(() => {
    dispatch(CategorySearch(research)); // Assicurati che dispatch venga chiamato correttamente
  }, [research]);

  return (
    <Card className='mb-2'> 
      <h4 className='text-center m-0 mt-2'>Consigliati per te</h4>
      <hr className='m-1' />
      <Container className='d-flex justify-content-center mx-2 mb-1 px-5'>
        <Button
          variant='transparent'
          className='btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold py-0 fs'
          onClick={() => setResearchCallback('software')}
        >
          Software Development
        </Button>
        <Button
          variant='transparent'
          className='btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold py-0 ms-3'
          onClick={() => setResearchCallback('data')}
        >
          Data
        </Button>
        <Button
          variant='transparent'
          className='btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold py-0 ms-3'
          onClick={() => setResearchCallback('devops')}
        >
          DevOps - SysAdmin
        </Button>
        <Button
          variant='transparent'
          className='btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold py-0 ms-3 d-none d-lg-block'
          onClick={() => setResearchCallback('product')}
        >
          Product
        </Button>
        <Button
          variant='transparent'
          className='btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold py-0 ms-3 d-none d-xl-block'
          onClick={() => setResearchCallback('marketing')}
        >
          Marketing
        </Button>
      </Container>
    </Card>
  );
};

export default JobsCategory;

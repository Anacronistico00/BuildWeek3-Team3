import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GoPlus } from 'react-icons/go';
import { useState, useEffect } from 'react';
import GetExperiences from './GetExperiences';
import { RetrieveExperiencesAction } from '../actions/setProfileAction';
import { HiOutlinePencil } from 'react-icons/hi2';

function Experiences() {
  const [show, setShow] = useState(false);
  const [isModifing, setisModifing] = useState(false);
  const [elementToModify, setElementToModify] = useState('');
  const [expList, setExpList] = useState([]); // Usa stato locale per la lista delle esperienze
  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.user.user_logged);
  const profile = useSelector((state) => state.user.profile);
  const experiences = useSelector((state) => state.experiences.exp_list);
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.profileInfo);

  useEffect(() => {
    if (userid) {
      console.log(userid.profileInfo);
      dispatch(RetrieveExperiencesAction(token, userid.profileInfo)); // Carica le esperienze all'avvio
    }
  }, [userid.profileInfo]);

  useEffect(() => {
    setExpList(experiences);
    console.log(experiences);
  }, [experiences]);

  const handleSave = () => {
    dispatch(RetrieveExperiencesAction(token, userid.profileInfo)); // Aggiorna la lista quando viene salvata/modificata un'esperienza
    setShow(false); // Chiudi il modal
  };

  const handleClose = () => {
    setShow(false);
  };

  const differenzaDate = (date1, date2) => {
    let dataInizio = new Date(date1);
    let dataFine = new Date(date2);
    let anni = dataFine.getFullYear() - dataInizio.getFullYear();
    let mesi = dataFine.getMonth() - dataInizio.getMonth();
    if (mesi < 0) {
      anni--;
      mesi += 12;
    }
    return `${
      anni === 0 ? '' : anni === 1 ? `${anni} anno ` : `${anni} anni `
    }${mesi === 0 ? '' : mesi === 1 ? `${mesi} mese ` : `${mesi} mesi `}`;
  };

  function formatoDataBreve(dataStr) {
    const mesi = [
      'gen',
      'feb',
      'mar',
      'apr',
      'mag',
      'giu',
      'lug',
      'ago',
      'set',
      'ott',
      'nov',
      'dic',
    ];
    let data = new Date(dataStr);
    let mese = mesi[data.getMonth()];
    let anno = data.getFullYear();

    return `${mese} ${anno}`;
  }

  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(expList.length); // Mostra tutti gli elementi
  };

  const showLess = () => {
    setVisibleCount(3); // Mostra solo i primi 3 elementi
  };

  return (
    <Container className='px-0 mt-3'>
      <GetExperiences
        show={show}
        handleClose={handleClose}
        mod={isModifing}
        elementId={elementToModify}
        onSave={handleSave} // Passa la callback per aggiornare la lista
      />
      <Row>
        <Col xs={12}>
          <Card className='p-4'>
            <Row className=' align-items-end mb-3'>
              <Col xs={'auto'}>
                <h4>Esperienze</h4>
              </Col>
              <Col xs={'auto'} className='ms-auto'>
                {user && profile && user._id === profile._id && (
                  <button
                    className='btn-experience bg-white border-0 rounded-circle p-1 pencil-icon'
                    onClick={() => setShow(true)}
                  >
                    <GoPlus className='fs-2 text-decoration-none text-black' />
                  </button>
                )}
              </Col>
            </Row>
            <div id='experiences'>
              {experiences &&
                expList.slice(0, visibleCount).map((exp) => {
                  return (
                    <Row key={exp._id} className='mb-3 g-1'>
                      <Col xs={2} xl={1}>
                        <img src={exp.image} alt='' width={50} height={50} />
                      </Col>
                      <Col xs={9} xl={10}>
                        <h6 className='mb-0'>{exp.role}</h6>
                        <p className='mb-0'>
                          {exp.company} • {exp.area}
                        </p>
                        <p className='text-muted'>
                          {`${formatoDataBreve(
                            exp.startDate
                          )} - ${formatoDataBreve(
                            exp.endDate
                          )} • ${differenzaDate(exp.startDate, exp.endDate)}`}
                        </p>
                      </Col>
                      <Col xs={1} className='text-start'>
                        {user._id === profile._id && (
                          <button
                            className='btn-experience bg-white border-0 rounded-circle p-1 p-lg-2 d-flex'
                            onClick={() => {
                              setisModifing(true);
                              setElementToModify(exp._id);
                              setShow(true);
                            }}
                          >
                             <HiOutlinePencil className='fs-4' />
                          </button>
                        )}
                      </Col>
                    </Row>
                  );
                })}
              {visibleCount < expList.length && (
                <button onClick={showMore}>Mostra di più</button>
              )}
              {visibleCount >= expList.length && expList.length > 3 && (
                <button onClick={showLess}>Mostra meno</button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experiences;

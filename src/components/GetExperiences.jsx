import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RetrieveExperiencesAction } from '../actions/setProfileAction';

function GetExperiences(props) {
  const [exp, setExp] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  });

  const [img, setImg] = useState(undefined);
  const profile = useSelector((state) => state.profileInfo);
  const user = useSelector((state) => state.user.user_logged);
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const retrieveModify = async () => {
    if (props.mod) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${props.elementId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.ok) {
          const expTomod = await response.json();
          setExp({
            role: expTomod.role,
            area: expTomod.area,
            company: expTomod.company,
            description: expTomod.description,
            startDate: expTomod.startDate.slice(0, 10),
            endDate: expTomod.endDate.slice(0, 10),
          });
        } else {
          throw new Error('Errore durante il recupero dell’esperienza');
        }
      } catch (err) {
        alert(err.message);
      }
    } else {
      setExp(exp);
    }
    dispatch(RetrieveExperiencesAction(token, profile.profileInfo));
    props.handleClose();
  };

  useEffect(() => {
    retrieveModify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile.profileInfo._id}/experiences`,
        {
          method: 'POST',
          body: JSON.stringify(exp),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(exp);

        if (img) {
          let formData = new FormData();
          formData.append('experience', img);
          const response2 = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${profile.profileInfo._id}/experiences/${data._id}/picture`,
            {
              method: 'POST',
              body: formData,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response2.ok) {
            throw new Error('Errore nel caricamento dell’immagine');
          }
        }

        setExp({
          role: '',
          area: '',
          company: '',
          description: '',
          startDate: '',
          endDate: '',
        });
        alert('Esperienza salvata con successo');
      } else {
        throw new Error('Errore durante il salvataggio');
      }
    } catch (err) {
      alert(err.message);
    }
    dispatch(RetrieveExperiencesAction(token, profile.profileInfo));
    props.handleClose();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const confirm = window.confirm(
      'Sei sicuro di voler eliminare questa esperienza?'
    );
    if (confirm) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${props.elementId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.ok) {
          alert('Esperienza eliminata con successo');
          props.handleClose();
        } else {
          throw new Error('Errore durante l’eliminazione');
        }
      } catch (err) {
        alert(err.message);
      }
    }
    dispatch(RetrieveExperiencesAction(token, profile.profileInfo));
    props.handleClose();
  };

  const handleModify = async (e) => {
    e.preventDefault();
    try {
      const body = {
        ...exp,
        endDate: exp.endDate ? exp.endDate : null,
      };
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${props.elementId}`,
        {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.ok) {
        if (img) {
          let formData = new FormData();
          formData.append('experience', img);
          const response2 = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${props.elementId}/picture`,
            {
              method: 'POST',
              body: formData,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response2.ok) {
            throw new Error('Errore nel caricamento dell’immagine');
          }
        }
        alert('Esperienza modificata con successo');
        props.handleClose();
      } else {
        throw new Error('Errore durante la modifica');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      scrollable
      className='modalePost'
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props.mod ? 'Modifica esperienza' : 'Aggiungi esperienza'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {[
            {
              label: 'Qualifica',
              key: 'role',
              placeholder: 'Esempio: Full Stack Developer',
            },
            {
              label: 'Nome azienda',
              key: 'company',
              placeholder: 'Esempio: Apple',
            },
            { label: 'Località', key: 'area', placeholder: 'Esempio: Roma' },
          ].map((field) => (
            <Form.Group className='mb-3' key={field.key}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type='text'
                placeholder={field.placeholder}
                required
                value={exp[field.key]}
                onChange={(e) =>
                  setExp({ ...exp, [field.key]: e.target.value })
                }
              />
            </Form.Group>
          ))}
          <Form.Group className='mb-3'>
            <Form.Label>Data di inizio</Form.Label>
            <Form.Control
              type='date'
              required
              value={exp.startDate}
              onChange={(e) => setExp({ ...exp, startDate: e.target.value })}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Data fine</Form.Label>
            {!exp.isPresent ? (
              <Form.Control
                type='date'
                value={exp.endDate || ''}
                onChange={(e) => setExp({ ...exp, endDate: e.target.value })}
              />
            ) : (
              <span>Presente</span>
            )}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Upload immagine</Form.Label>
            <Form.Control
              type='file'
              onChange={(e) => setImg(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={exp.description}
              onChange={(e) => setExp({ ...exp, description: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {props.mod ? (
          <>
            <Button variant='secondary' onClick={props.handleClose}>
              Chiudi
            </Button>
            <Button variant='danger' onClick={handleDelete}>
              Elimina esperienza
            </Button>
            <Button variant='primary' onClick={handleModify}>
              Modifica esperienza
            </Button>
          </>
        ) : (
          <>
            <Button variant='secondary' onClick={props.handleClose}>
              Chiudi
            </Button>
            <Button variant='primary' onClick={handleSubmit}>
              Salva esperienza
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default GetExperiences;

import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../actions/setProfileAction';
import {
  Button,
  Card,
  Col,
  Collapse,
  Container,
  Dropdown,
  Modal,
  Row,
} from 'react-bootstrap';
import {
  Arrow90degRight,
  BookmarkFill,
  CameraFill,
  CardImage,
  ChevronDown,
  ChevronUp,
  Download,
  Envelope,
  InfoSquareFill,
  Linkedin,
  Newspaper,
  Pencil,
  PersonFill,
  Trash,
} from 'react-bootstrap-icons';
import { useEffect, useRef, useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi2';

const PersonalInfoComponent = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showProfileModifyModal, setShowProfileModifyModal] = useState(false);
  const [showContactsModal, setShowProfile] = useState(false);

  const handleProfileModalShow = () => setShowProfileModal(true);
  const handleProfileModalClose = () => setShowProfileModal(false);

  const handleProfileModifyModalShow = () => setShowProfileModifyModal(true);
  const handleProfileModifyModalClose = () => setShowProfileModifyModal(false);

  const handleContactsModalShow = () => setShowProfile(true);
  const handleContactsModalClose = () => setShowProfile(false);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const [showProfilePicModal, setShowProfilePicModal] = useState(false);

  const handleProfilePicModalClose = () => setShowProfilePicModal(false);
  const handleProfilePicModalShow = () => setShowProfilePicModal(true);

  const [showProfilePicModalModify, setShowProfilePicModalModify] =
    useState(false);

  const handleProfilePicModalModifyShow = () => {
    setShowProfilePicModalModify(true);
  };

  const handleProfilePicModalModifyClose = () => {
    setShowProfilePicModalModify(false);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const handlePreviewModalClose = () => setShowPreviewModal(false);
  const handlePreviewModalShow = () => setShowPreviewModal(true);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDI1ZTE2ZjYzNTAwMTVmZWNiNzYiLCJpYXQiOjE3Mzc5NjYxNzQsImV4cCI6MTczOTE3NTc3NH0.C54YDV4poWgVTe4vEBdnfY19L0nYPNupc4t-FcJn1m8';

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewSrc(URL.createObjectURL(file));
    handlePreviewModalShow();
  };

  const fileInputRef = useRef(null);

  const handleSaveClick = async () => {
    await handleUploadClick();
    handlePreviewModalClose();
    setShowCamera(false);
  };

  const handleUploadClick = async () => {
    if (selectedFile) {
      try {
        await uploadProfilePic(selectedFile);
        await getProfileInfo();
        handleProfilePicModalClose();
      } catch (error) {
        console.error("Errore nel caricamento dell'immagine:", error);
      }
    }
  };

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  const startCamera = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Errore nell'accesso alla fotocamera:", error);
    }
  };

  const ClosePhoto = () => {
    setShowCamera(false);
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;
    const size = Math.min(width, height);
    canvasRef.current.width = size;
    canvasRef.current.height = size;
    context.drawImage(
      videoRef.current,
      (width - size) / 2,
      (height - size) / 2,
      size,
      size,
      0,
      0,
      size,
      size
    );
    canvasRef.current.toBlob(async (blob) => {
      const file = new File([blob], 'profile-pic.jpg', { type: 'image/jpeg' });
      setSelectedFile(file);
      setPreviewSrc(URL.createObjectURL(file));
      handlePreviewModalShow();
      setShowCamera(false);
    }, 'image/jpeg');
  };

  const getProfileInfo = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      dispatch(setProfile(data));
    } catch (error) {
      console.error(error);
    }
  };

  const uploadProfilePic = async (file) => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`;

    const formData = new FormData();
    formData.append('profile', file);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Errore ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Immagine caricata con successo:', data);
      return data;
    } catch (error) {
      console.error("Errore nel caricamento dell'immagine:", error);
      throw error;
    }
  };

  useEffect(() => {
    console.log('Fetching profile info');

    getProfileInfo();
  }, [dispatch]);

  return (
    <>
      {profile && (
        <Card className='rounded-4 mt-4 position-relative'>
          <Card.Img
            variant='top'
            src='public\copertina.jpg'
            className='coverImage'
          />
          <CameraFill className='btnCamera'></CameraFill>
          <Card.Body className='pt-0'>
            <Card.Title>
              <div className=' position-relative'>
                <img
                  onClick={handleProfilePicModalShow}
                  style={{ cursor: 'pointer' }}
                  src={profile.image}
                  alt='Profile Image'
                  className='profileImage'
                />
              </div>
              <div className='d-flex justify-content-end'>
                <Button
                  variant='trasparent'
                  className='px-2 rounded-5 mt-3 btnModify'
                >
                  <HiOutlinePencil className='fs-4'></HiOutlinePencil>
                </Button>
              </div>
              <Container fluid>
                <Row>
                  <Col>
                    <div>
                      <h2 className='name'>
                        {profile.name} {profile.surname}
                      </h2>
                      <p className='username'>@{profile.username}</p>
                      <p>--</p>
                    </div>
                  </Col>
                  <Col>
                    <ul className='mt-0'>
                      <li className='list-unstyled'>
                        <Button variant='transparent' className='p-2'>
                          <img
                            src='public\epicode.png'
                            alt='Stats'
                            className='workplaceImage'
                          />
                          <span className='fw-bold text-secondary workplaceInfo'>
                            Epic Education SRL
                          </span>
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='areaInfo'>
                      <span className='text-secondary'>{profile.area} </span>
                      <span
                        onClick={handleContactsModalShow}
                        className='contactsInfo text-primary'
                      >
                        Informazioni di Contatto
                      </span>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Card.Title>
            <Container fluid className='p-0'>
              <Dropdown className='custom-dropdown d-inline-block'>
                <Dropdown.Toggle className='rounded-5 fw-bold py-0'>
                  Disponibile per
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#'>
                    <h6>Selezione del personale</h6>
                    <p>
                      Fai sapere che stai facendo selezione e attrai candidati
                      qualificati
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>
                    <h6>Cambiare lavoro</h6>
                    <p>
                      Mostra ai recruiter e ad altri che sei disponibile a
                      lavorare
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>
                    <h6>Servizi offerti</h6>
                    <p>
                      Metti in risalto i servizi che offri, così i nuovi clienti
                      potranno trovarti
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                variant='transparent'
                className='btnProfileModify rounded-5 border-2 border-primary m-2 text-primary fw-bold py-0'
                onClick={handleProfileModifyModalShow}
              >
                Aggiungi sezione del profilo
              </Button>

              <Dropdown className='custom-dropdown2 d-inline-block'>
                <Dropdown.Toggle
                  variant='transparent'
                  className='btnResource rounded-5 border-2 border-secondary m-2 fw-bold py-0'
                >
                  Risorse
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#'>
                    <Arrow90degRight className='fs-5'></Arrow90degRight>
                    <h6>Invia il profilo in un messaggio</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>
                    <Download className='fs-5'></Download>
                    <h6>Salva come PDF</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>
                    <PersonFill className='fs-5'></PersonFill>
                    <h6>Informazioni demografiche personali</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>
                    <BookmarkFill className='fs-5'></BookmarkFill>
                    <h6>Elementi salvati</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>
                    <Newspaper className='fs-5'></Newspaper>
                    <h6>Attività</h6>
                  </Dropdown.Item>
                  <Dropdown.Item href='#'>
                    <InfoSquareFill className='fs-5'></InfoSquareFill>
                    <h6>Informazioni su questo profilo</h6>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button
                variant='transparent'
                className='btnProfile rounded-5 border-2 border-primary my-2 text-primary fw-bold py-0'
                onClick={handleProfileModalShow}
              >
                Migliora profilo
              </Button>
            </Container>
          </Card.Body>
        </Card>
      )}

      {profile && (
        <Modal show={showContactsModal} onHide={handleContactsModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {profile.name} {profile.surname}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className=' profileInfoHeader d-flex justify-content-between'>
              <p className='profileInfo fs-5'>Informazioni di contatto</p>
              <HiOutlinePencil className='fs-4'></HiOutlinePencil>
            </div>
            <div className='profileInfoBody mt-3'>
              <div className='ms-2 d-flex'>
                <Linkedin className='fs-4'></Linkedin>
                <div className='ms-2 mb-3'>
                  <h6>Il tuo profilo</h6>
                  <p className='profileLink text-primary'>
                    Linkedin.com/in/{profile.name}-{profile.surname}-
                    {profile._id}
                  </p>
                </div>
              </div>
              <div className='ms-2 d-flex'>
                <Envelope className='fs-4'></Envelope>
                <div className='ms-2'>
                  <h6>Email</h6>
                  <p className='profileLink text-primary'>{profile.email}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <Modal
        show={showProfileModal}
        onHide={handleProfileModalClose}
        dialogClassName='enhanceProfileModal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Migliora il tuo Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className='enhanceProfile'>
          <div>
            <p className='fw-bold'>
              Aggiungi un pulsante personalizzato su LinkedIn
            </p>
            <p>Promuovi le visite al tuo sito web, al tuo portfolio e altro.</p>
            <hr />
          </div>
          <div>
            <p className='fw-bold'>
              Usa l’assistente di scrittura del profilo con IA
            </p>
            <p>
              Fai risaltare il tuo profilo con l’aiuto dell’intelligenza
              artificiale.
            </p>
            <hr />
          </div>
          <div>
            <p className='fw-bold'>Mostra sezioni del profilo in alto</p>
            <p>Mostra i dettagli principali nella sezione in primo piano.</p>
            <hr />
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showProfileModifyModal}
        onHide={handleProfileModifyModalClose}
        dialogClassName='addToProfileModal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi al profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {[
            {
              title: 'Sezioni principali',
              key: 'principali',
              description:
                'Iniziamo dalle basi. Se compili queste sezioni, sarà più facile trovarti per i recruiter e le persone che potresti conoscere',
              items: [
                'Aggiungi informazioni',
                'Aggiungi grado di formazione',
                'Aggiungi posizione lavorativa',
                'Aggiungi servizi',
                'Aggiungi pausa lavorativa',
                'Aggiungi competenze',
              ],
            },
            {
              title: 'Sezioni consigliate',
              key: 'consigliate',
              description:
                'Completando queste sezioni aumenterai la tua credibilità e potrai accedere a più opportunità.',
              items: [
                'Aggiungi elementi in primo piano',
                'Aggiungi licenze e certificazioni',
                'Aggiungi progetti',
                'Aggiungi corsi',
                'Aggiungi referenze',
              ],
            },
            {
              title: 'Altro',
              key: 'altro',
              description:
                'Conferisci ancora più personalità al tuo profilo. Queste sezioni ti aiuteranno a espandere la tua rete e a instaurare più relazioni lavorative.',
              items: [
                'Aggiungi esperienza di volontariato',
                'Aggiungi pubblicazioni',
                'Aggiungi brevetti',
                'Aggiungi riconoscimenti e premi',
                'Aggiungi votazioni esame',
                'Aggiungi lingue',
                'Aggiungi organizzazioni',
                'Aggiungi cause',
                'Aggiungi informazioni di contatto',
              ],
            },
          ].map((section) => (
            <div key={section.key}>
              <Button
                variant='light'
                className='w-100 text-start d-flex justify-content-between align-items-center mt-3'
                onClick={() => toggleSection(section.key)}
              >
                <span className='fw-bold'>{section.title}</span>
                {openSection === section.key ? <ChevronUp /> : <ChevronDown />}
              </Button>

              <Collapse in={openSection === section.key}>
                <div className='p-2'>
                  {section.description && (
                    <p className='text-muted'>{section.description}</p>
                  )}
                  {section.items.map((item, index) => (
                    <Button
                      variant='transparent'
                      key={index}
                      className='w-100 text-start text-secondary fw-bold border-bottom my-2 py-1 rounded-3'
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </Collapse>
            </div>
          ))}
        </Modal.Body>
      </Modal>
      {profile && (
        <Modal
          class
          show={showProfilePicModal}
          onHide={handleProfilePicModalClose}
          dialogClassName='profilePhotoModal'
        >
          <Modal.Header closeButton className='border-0'>
            <Modal.Title>Foto profilo</Modal.Title>
          </Modal.Header>
          <Modal.Body className='d-flex justify-content-center align-items-center'>
            <img src={profile.image} alt='Profile' className='profilePic' />
          </Modal.Body>
          <Modal.Footer className='justify-content-between'>
            <div className='d-flex flex-row footerButtons'>
              <Button
                variant='transparent'
                onClick={handleProfilePicModalClose}
                className='d-flex flex-column align-items-center text-white'
              >
                <Pencil></Pencil>
                Modifica
              </Button>
              <Button
                variant='transparent'
                onClick={handleProfilePicModalModifyShow}
                className='d-flex flex-column align-items-center text-white'
              >
                <CameraFill></CameraFill>
                Aggiungi foto
              </Button>
              <Button
                variant='transparent'
                onClick={handleProfilePicModalClose}
                className='d-flex flex-column align-items-center text-white'
              >
                <CardImage></CardImage>
                Fotogrammi
              </Button>
            </div>
            <div className='footerButtons'>
              <Button
                variant='transparent'
                onClick={handleProfilePicModalClose}
                className='d-flex flex-column align-items-center text-white'
              >
                <Trash></Trash>
                Elimina
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {profile && (
        <Modal
          show={showProfilePicModalModify}
          onHide={handleProfilePicModalModifyClose}
          dialogClassName='profilePhotoModalModify'
        >
          <Modal.Header closeButton className='border-0'>
            <Modal.Title>Foto profilo</Modal.Title>
          </Modal.Header>
          {!showCamera && (
            <Modal.Body className='d-flex flex-column justify-content-center align-items-center text-secondary'>
              <h5>{profile.name}, aiuta gli altri a riconoscerti!</h5>
              <img src={profile.image} alt='Profile' className='profilePic' />
              <p className='text-center'>
                Chiediamo agli utenti di LinkedIn di utilizzare le loro vere
                identità, quindi scatta o carica una tua foto. Poi ritagliala,
                applica dei filtri e perfezionala come vuoi.
              </p>
            </Modal.Body>
          )}
          {showCamera && (
            <Container className='camera '>
              <video ref={videoRef} style={{ width: '100%' }}></video>
              <div className='d-flex justify-content-between mt-3'>
                <Button
                  variant='transparent'
                  onClick={ClosePhoto}
                  className='btnClosePhoto rounded-5 border-2 border-primary'
                >
                  Annulla
                </Button>
                <Button
                  variant='primary'
                  onClick={capturePhoto}
                  className='btnCapture rounded-5'
                >
                  Cattura
                </Button>
              </div>

              <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            </Container>
          )}
          <Modal.Footer className='justify-content-center'>
            {!showCamera && (
              <Button
                variant='transparent'
                onClick={startCamera}
                className='btnTakePicture rounded-5 border-2 border-primary'
              >
                Usa Fotocamera
              </Button>
            )}

            <div className='custom-file-input'>
              {!showCamera && (
                <div className='d-flex'>
                  <input
                    type='file'
                    id='fileInput'
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                  />
                  <label
                    htmlFor='fileInput'
                    className='btn btn-primary rounded-5 fw-bold'
                  >
                    Carica foto
                  </label>
                </div>
              )}
            </div>
          </Modal.Footer>
        </Modal>
      )}

      <Modal
        show={showPreviewModal}
        onHide={handlePreviewModalClose}
        dialogClassName='previewModal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Anteprima Foto</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
          {previewSrc && (
            <img src={previewSrc} alt='Preview' className='profilePic' />
          )}
        </Modal.Body>
        <Modal.Footer className='justify-content-end'>
          <Button variant='secondary' onClick={handlePreviewModalClose}>
            Chiudi
          </Button>
          <Button variant='primary' onClick={handleSaveClick}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PersonalInfoComponent;

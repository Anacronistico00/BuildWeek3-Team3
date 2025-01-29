import { useEffect } from 'react';
import {
  Navbar,
  Form,
  Container,
  FormControl,
  Nav,
  NavDropdown,
  Col,
  Row,
  Dropdown,
  Button,
  DropdownItemText,
} from 'react-bootstrap';

import {
  Bell,
  BriefcaseFill,
  ChatDotsFill,
  Grid3x3,
  HouseDoorFill,
  PeopleFill,
  Search,
} from 'react-bootstrap-icons';
import { GoPlus } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileInfo } from '../actions/profileInfo';
import { useEffect } from 'react';

const NavBarComponent = function () {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    console.log('Fetching profile info');

    dispatch(getProfileInfo(token));
  }, [dispatch]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    console.log('Fetching profile info');

    dispatch(getProfileInfo(token));
  }, [dispatch]);

  return (
    <>
      <Navbar className='p-0' fixed='top' bg='light' expand='lg'>
        <Container className='position-relative'>
          <Row className='w-100'>
            <Col xs={2} lg={3} className='d-flex align-items-center'>
              <Navbar.Brand href='#'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png'
                  width='36'
                  height='36'
                  className='d-inline-block align-top'
                  alt='LinkedIn logo'
                />
              </Navbar.Brand>
      <Navbar className='p-0' fixed='top' bg='light' expand='lg'>
        <Container className='position-relative'>
          <Row className='w-100'>
            <Col xs={2} lg={3} className='d-flex align-items-center'>
              <Navbar.Brand href='#'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png'
                  width='36'
                  height='36'
                  className='d-inline-block align-top'
                  alt='LinkedIn logo'
                />
              </Navbar.Brand>

              {/* Barra di ricerca */}
              <Form className='mr-auto d-flex align-items-center'>
                <div className='input-group'>
                  <Search className='search-icon' />
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='d-none d-md-block me-2'
                  />
                </div>
              </Form>
            </Col>
            <Col
              xs={8}
              lg={6}
              className=' d-flex justify-content-evenly justify-content-lg-between'
            >
              {/* Menu di navigazione */}
              <div className='d-flex flex-row align-items-center justify-content-between mx-3  '>
                <Nav.Link
                  href='#home'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <HouseDoorFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Home</p>
                </Nav.Link>
              {/* Barra di ricerca */}
              <Form className='mr-auto d-flex align-items-center'>
                <div className='input-group'>
                  <Search className='search-icon' />
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='d-none d-md-block me-2'
                  />
                </div>
              </Form>
            </Col>
            <Col
              xs={8}
              lg={6}
              className=' d-flex justify-content-evenly justify-content-lg-between'
            >
              {/* Menu di navigazione */}
              <div className='d-flex flex-row align-items-center justify-content-between mx-3  '>
                <Nav.Link
                  href='#home'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <HouseDoorFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Home</p>
                </Nav.Link>

                <Nav.Link
                  href='#network'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <PeopleFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Rete</p>
                </Nav.Link>
                <Nav.Link
                  href='#network'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <PeopleFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Rete</p>
                </Nav.Link>

                <Nav.Link
                  href='#jobs'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <BriefcaseFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Lavoro</p>
                </Nav.Link>
                <Nav.Link
                  href='#jobs'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <BriefcaseFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Lavoro</p>
                </Nav.Link>

                <Nav.Link
                  href='#messaging'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <ChatDotsFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Messaggistica</p>
                </Nav.Link>
                <Nav.Link
                  href='#messaging'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <ChatDotsFill className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Messaggistica</p>
                </Nav.Link>

                <Nav.Link
                  href='#notifications'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <Bell className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Notifiche</p>
                </Nav.Link>
                <Nav.Link
                  href='#notifications'
                  className='d-flex flex-column align-items-center mx-3 mx-lg-4 '
                >
                  <Bell className='HomeIcons' />
                  <p className='SubsIcon d-none d-md-block'>Notifiche</p>
                </Nav.Link>

                {/* Profilo Utente */}

                <div className='d-flex justify-content-center align-items-center'>
                  <div className='ImgProfile'>
                    {profile.profile && (
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='ImgProfile'>
                    {profile.profile && (
                      <img
                        src={profile.profile.image}
                        alt='imagine profilo'
                        className='rounded-circle'
                        width='20'
                        height='20'
                      />
                    )}
                  </div>
                  <span className=' nameTab'>Tu</span>
                </div>
                    )}
                  </div>
                  <span className=' nameTab'>Tu</span>
                </div>

                <NavDropdown
                  className='text-center custom-dropdown-1'
                  drop='start'
                  id='dropdownMenu1'
                >
                  <Dropdown.Item>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {profile.profile && (
                <NavDropdown
                  className='text-center custom-dropdown-1'
                  drop='start'
                  id='dropdownMenu1'
                >
                  <Dropdown.Item>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {profile.profile && (
                        <img
                          src={profile.profile.image}
                          alt='Profile'
                          style={{
                            width: '50px',
                            borderRadius: '50%',
                            marginRight: '10px',
                          }}
                        />
                      )}

                      <div>
                        <strong>
                          {profile.profile && profile.profile.name}{' '}
                          {profile.profile && profile.profile.surname}
                        </strong>
                        <p>{profile.profile && profile.profile.bio}</p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <div>
                    <Button
                      variant='transparent'
                      className='btnProfile rounded-5 border-2 border-primary text-primary fw-bold m-3 py-0'
                      href='#/Profilo'
                    >
                      Visualizza profilo
                    </Button>
                  </div>
                      )}

                      <div>
                        <strong>
                          {profile.profile && profile.profile.name}{' '}
                          {profile.profile && profile.profile.surname}
                        </strong>
                        <p>{profile.profile && profile.profile.bio}</p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <div>
                    <Button
                      variant='transparent'
                      className='btnProfile rounded-5 border-2 border-primary text-primary fw-bold m-3 py-0'
                      href='#/Profilo'
                    >
                      Visualizza profilo
                    </Button>
                  </div>

                  <Dropdown.Divider />
                  <DropdownItemText>
                    <h6>Account</h6>
                  </DropdownItemText>
                  <Dropdown.Item href='#/action-2'>
                    <p className='smallertext text-secondary'>
                      Prova 1 mese di Premium per 0 EUR
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/Impostazioni' className='Underlined'>
                    Impostazioni e privacy
                  </Dropdown.Item>
                  <Dropdown.Item href='#Guida' className='Underlined'>
                    Guida
                  </Dropdown.Item>
                  <Dropdown.Item href='#Lingua' className='Underlined'>
                    Lingua
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <DropdownItemText>
                    <h6>Gestisci</h6>
                  </DropdownItemText>
                  <Dropdown.Item href='#/Post' className='Underlined'>
                    Post e attività
                  </Dropdown.Item>
                  <Dropdown.Item href='#/Account' className='Underlined'>
                    Account per la pubblicazione di offerte di lavoro
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/Esci' className='Underlined'>
                    Esci
                  </Dropdown.Item>
                </NavDropdown>
              </div>
            </Col>
            {/* Sezione "Per le Aziende" */}
            <Col xs={2} lg={3} className='border-start ms-0 '>
              <div className=' text-center'>
                <Grid3x3 className='HomeIcons mb-0 mt-2' />
                <p className='SubsIcon d-none d-md-block'>Per le aziende</p>
              </div>
              <NavDropdown className='navbar-dropdown' drop={'start'}>
                <Container fluid>
                  <Row>
                    <Col xs={12} lg={6} className=' pt-lg-0 mt-4 '>
                      <h5>Le mie app</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-sales-navigator-@1-a'
                              x1='40.53'
                              y1='-53.4'
                              x2='20.23'
                              y2='19.17'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <circle
                            cx='20'
                            cy='20'
                            r='14'
                            fill='url(#app-sales-navigator-@1-a)'
                          />
                          <path
                            d='M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z'
                            fill='#fff'
                          />
                          <path
                            d='M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z'
                            fill='#98d8f4'
                          />
                          <circle cx='20' cy='20' r='4' fill='#fff' />
                          <circle cx='20' cy='20' r='2' fill='#0073b1' />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Trova Nuovi Clienti
                        </a>
                      </div>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-groups-@1-b'
                              x1='1.84'
                              y1='-24.59'
                              x2='20.66'
                              y2='25.05'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                            <clipPath id='app-groups-@1-a'>
                              <path
                                d='M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z'
                                fill='none'
                              />
                            </clipPath>
                          </defs>
                          <path
                            d='M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z'
                            fill='#caedff'
                          />
                          <circle cx='29' cy='16' r='3' fill='#0091ca' />
                          <circle cx='11' cy='16' r='3' fill='#0091ca' />
                          <g clipPath='url(#app-groups-@1-a)'>
                            <path
                              d='M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z'
                              fill='url(#app-groups-@1-b)'
                            />
                            <path
                              fill='#0091ca'
                              d='M26 21h6v14h-6zM8 21h6v14H8z'
                            />
                          </g>
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Gruppi
                        </a>
                      </div>
                      <h5 className=' text-secondary smallertext'>Talent</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-talent-insights-medium-a'
                              x1='34.05'
                              y1='44.47'
                              x2='13.67'
                              y2='19.5'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <path
                            d='M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z'
                            fill='#caedff'
                          />
                          <path fill='#65c3e8' d='M25 6v6h6l-6-6z' />
                          <path
                            d='M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z'
                            fill='url(#app-talent-insights-medium-a)'
                          />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Talents Insight
                        </a>
                      </div>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-jobs-posting-@1-a'
                              x1='-6.68'
                              y1='-1'
                              x2='25.05'
                              y2='26.36'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <path
                            fill='none'
                            stroke='#caedff'
                            strokeMiterlimit='10'
                            strokeWidth='2'
                            d='M20 8.67l-4 6.66M20 8.67l4 6.66'
                          />
                          <rect
                            x='8'
                            y='14'
                            width='24'
                            height='16'
                            rx='1'
                            ry='1'
                            fill='url(#app-jobs-posting-@1-a)'
                          />
                          <path fill='#65c3e8' d='M12 18h16v3H12z' />
                          <path fill='#33aada' d='M15 23h10v3H15z' />
                          <circle cx='20' cy='9' r='2' fill='#65c3e8' />
                        </svg>
                  <Dropdown.Divider />
                  <DropdownItemText>
                    <h6>Account</h6>
                  </DropdownItemText>
                  <Dropdown.Item href='#/action-2'>
                    <p className='smallertext text-secondary'>
                      Prova 1 mese di Premium per 0 EUR
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/Impostazioni' className='Underlined'>
                    Impostazioni e privacy
                  </Dropdown.Item>
                  <Dropdown.Item href='#Guida' className='Underlined'>
                    Guida
                  </Dropdown.Item>
                  <Dropdown.Item href='#Lingua' className='Underlined'>
                    Lingua
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <DropdownItemText>
                    <h6>Gestisci</h6>
                  </DropdownItemText>
                  <Dropdown.Item href='#/Post' className='Underlined'>
                    Post e attività
                  </Dropdown.Item>
                  <Dropdown.Item href='#/Account' className='Underlined'>
                    Account per la pubblicazione di offerte di lavoro
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/Esci' className='Underlined'>
                    Esci
                  </Dropdown.Item>
                </NavDropdown>
              </div>
            </Col>
            {/* Sezione "Per le Aziende" */}
            <Col xs={2} lg={3} className='border-start ms-0 '>
              <div className=' text-center'>
                <Grid3x3 className='HomeIcons mb-0 mt-2' />
                <p className='SubsIcon d-none d-md-block'>Per le aziende</p>
              </div>
              <NavDropdown className='navbar-dropdown' drop={'start'}>
                <Container fluid>
                  <Row>
                    <Col xs={12} lg={6} className=' pt-lg-0 mt-4 '>
                      <h5>Le mie app</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-sales-navigator-@1-a'
                              x1='40.53'
                              y1='-53.4'
                              x2='20.23'
                              y2='19.17'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <circle
                            cx='20'
                            cy='20'
                            r='14'
                            fill='url(#app-sales-navigator-@1-a)'
                          />
                          <path
                            d='M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z'
                            fill='#fff'
                          />
                          <path
                            d='M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z'
                            fill='#98d8f4'
                          />
                          <circle cx='20' cy='20' r='4' fill='#fff' />
                          <circle cx='20' cy='20' r='2' fill='#0073b1' />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Trova Nuovi Clienti
                        </a>
                      </div>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-groups-@1-b'
                              x1='1.84'
                              y1='-24.59'
                              x2='20.66'
                              y2='25.05'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                            <clipPath id='app-groups-@1-a'>
                              <path
                                d='M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z'
                                fill='none'
                              />
                            </clipPath>
                          </defs>
                          <path
                            d='M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z'
                            fill='#caedff'
                          />
                          <circle cx='29' cy='16' r='3' fill='#0091ca' />
                          <circle cx='11' cy='16' r='3' fill='#0091ca' />
                          <g clipPath='url(#app-groups-@1-a)'>
                            <path
                              d='M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z'
                              fill='url(#app-groups-@1-b)'
                            />
                            <path
                              fill='#0091ca'
                              d='M26 21h6v14h-6zM8 21h6v14H8z'
                            />
                          </g>
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Gruppi
                        </a>
                      </div>
                      <h5 className=' text-secondary smallertext'>Talent</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-talent-insights-medium-a'
                              x1='34.05'
                              y1='44.47'
                              x2='13.67'
                              y2='19.5'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <path
                            d='M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z'
                            fill='#caedff'
                          />
                          <path fill='#65c3e8' d='M25 6v6h6l-6-6z' />
                          <path
                            d='M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z'
                            fill='url(#app-talent-insights-medium-a)'
                          />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Talents Insight
                        </a>
                      </div>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-jobs-posting-@1-a'
                              x1='-6.68'
                              y1='-1'
                              x2='25.05'
                              y2='26.36'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <path
                            fill='none'
                            stroke='#caedff'
                            strokeMiterlimit='10'
                            strokeWidth='2'
                            d='M20 8.67l-4 6.66M20 8.67l4 6.66'
                          />
                          <rect
                            x='8'
                            y='14'
                            width='24'
                            height='16'
                            rx='1'
                            ry='1'
                            fill='url(#app-jobs-posting-@1-a)'
                          />
                          <path fill='#65c3e8' d='M12 18h16v3H12z' />
                          <path fill='#33aada' d='M15 23h10v3H15z' />
                          <circle cx='20' cy='9' r='2' fill='#65c3e8' />
                        </svg>

                        <a href='#' className='linksChangeicon'>
                          Pubblica un'offerta di lavoro
                        </a>
                      </div>
                        <a href='#' className='linksChangeicon'>
                          Pubblica un'offerta di lavoro
                        </a>
                      </div>

                      <h5 className=' text-secondary smallertext'>Vendite</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <circle cx='20' cy='12' r='4' fill='#0073b1' />
                          <path
                            d='M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z'
                            fill='#0091ca'
                          />
                          <path
                            d='M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z'
                            fill='#33aada'
                            opacity='.8'
                          />
                          <path
                            fill='#0073b1'
                            d='M19 26.34l4-4V18h-6v6.34l2 2z'
                          />
                        </svg>
                      <h5 className=' text-secondary smallertext'>Vendite</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <circle cx='20' cy='12' r='4' fill='#0073b1' />
                          <path
                            d='M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z'
                            fill='#0091ca'
                          />
                          <path
                            d='M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z'
                            fill='#33aada'
                            opacity='.8'
                          />
                          <path
                            fill='#0073b1'
                            d='M19 26.34l4-4V18h-6v6.34l2 2z'
                          />
                        </svg>

                        <a href='#' className='linksChangeicon'>
                          Marketplace dei servizi
                        </a>
                      </div>
                      <h5 className=' text-secondary smallertext'>Marketing</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-ads-@1-a'
                              x1='34.78'
                              y1='3.84'
                              x2='14.66'
                              y2='25.84'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <g fill='url(#app-ads-@1-a)'>
                            <path d='M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z' />
                            <circle cx='20' cy='20' r='4' />
                          </g>
                          <circle
                            cx='20'
                            cy='20'
                            r='2'
                            transform='rotate(-45 20.002 19.995)'
                            fill='#33aada'
                          />
                          <path
                            fill='#33aada'
                            d='M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z'
                          />
                          <path
                            fill='#33aada'
                            d='M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z'
                          />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Pubblicizza
                        </a>
                      </div>
                      <h5 className=' text-secondary smallertext'>Learning</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-learning-@1-a'
                              x1='7.18'
                              y1='6.98'
                              x2='13.8'
                              y2='20.22'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#33aada' />
                              <stop offset='1' stopColor='#0091ca' />
                            </linearGradient>
                            <linearGradient
                              id='app-learning-@1-b'
                              x1='12.96'
                              y1='-17.55'
                              x2='27.9'
                              y2='24.33'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <path
                            d='M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z'
                            fill='url(#app-learning-@1-a)'
                          />
                          <path
                            d='M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z'
                            fill='url(#app-learning-@1-b)'
                          />
                          <path
                            fill='#33aada'
                            d='M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z'
                          />
                          <path
                            fill='#006097'
                            d='M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z'
                          />
                          <path
                            d='M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z'
                            fill='#fff'
                          />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Learning
                        </a>
                      </div>
                    </Col>
                    <Col xs={12} lg={6} className=' pt-4 pt-lg-0 mt-4'>
                      <h5>Scopri altro per il business</h5>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Assumi su Linkedin
                          <p className='smallerTitle'>Trova Attrai e assumi</p>
                        </a>
                      </div>
                        <a href='#' className='linksChangeicon'>
                          Marketplace dei servizi
                        </a>
                      </div>
                      <h5 className=' text-secondary smallertext'>Marketing</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-ads-@1-a'
                              x1='34.78'
                              y1='3.84'
                              x2='14.66'
                              y2='25.84'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <g fill='url(#app-ads-@1-a)'>
                            <path d='M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z' />
                            <circle cx='20' cy='20' r='4' />
                          </g>
                          <circle
                            cx='20'
                            cy='20'
                            r='2'
                            transform='rotate(-45 20.002 19.995)'
                            fill='#33aada'
                          />
                          <path
                            fill='#33aada'
                            d='M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z'
                          />
                          <path
                            fill='#33aada'
                            d='M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z'
                          />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Pubblicizza
                        </a>
                      </div>
                      <h5 className=' text-secondary smallertext'>Learning</h5>
                      <div className=' mx-3 my-4 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 40 40'
                          data-supported-dps='40x40'
                          width='40'
                          height='40'
                          focusable='false'
                        >
                          <defs>
                            <linearGradient
                              id='app-learning-@1-a'
                              x1='7.18'
                              y1='6.98'
                              x2='13.8'
                              y2='20.22'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#33aada' />
                              <stop offset='1' stopColor='#0091ca' />
                            </linearGradient>
                            <linearGradient
                              id='app-learning-@1-b'
                              x1='12.96'
                              y1='-17.55'
                              x2='27.9'
                              y2='24.33'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop offset='0' stopColor='#665ed0' />
                              <stop offset='1' stopColor='#0073b1' />
                            </linearGradient>
                          </defs>
                          <path
                            d='M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z'
                            fill='url(#app-learning-@1-a)'
                          />
                          <path
                            d='M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z'
                            fill='url(#app-learning-@1-b)'
                          />
                          <path
                            fill='#33aada'
                            d='M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z'
                          />
                          <path
                            fill='#006097'
                            d='M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z'
                          />
                          <path
                            d='M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z'
                            fill='#fff'
                          />
                        </svg>
                        <a href='#' className='linksChangeicon'>
                          Learning
                        </a>
                      </div>
                    </Col>
                    <Col xs={12} lg={6} className=' pt-4 pt-lg-0 mt-4'>
                      <h5>Scopri altro per il business</h5>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Assumi su Linkedin
                          <p className='smallerTitle'>Trova Attrai e assumi</p>
                        </a>
                      </div>

                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Vendi con Linkedin
                          <p className='smallerTitle'>
                            Sblocca nuove opportunità di vendita
                          </p>
                        </a>
                      </div>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Vendi con Linkedin
                          <p className='smallerTitle'>
                            Sblocca nuove opportunità di vendita
                          </p>
                        </a>
                      </div>

                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Offerta di lavoro gratuita
                          <p className='smallerTitle'>
                            Ottieni rapidamente candidati qualificati
                          </p>
                        </a>
                      </div>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Offerta di lavoro gratuita
                          <p className='smallerTitle'>
                            Ottieni rapidamente candidati qualificati
                          </p>
                        </a>
                      </div>

                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Fai pubblicità su Linkedin
                          <p className='smallerTitle'>
                            Acquisisci clienti e fai conoscere la tua azienda
                          </p>
                        </a>
                      </div>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Fai pubblicità su Linkedin
                          <p className='smallerTitle'>
                            Acquisisci clienti e fai conoscere la tua azienda
                          </p>
                        </a>
                      </div>

                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Inizia con Premium
                          <p className='smallerTitle'>
                            Amplia e sfrutta la tua rete
                          </p>
                        </a>
                      </div>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Inizia con Premium
                          <p className='smallerTitle'>
                            Amplia e sfrutta la tua rete
                          </p>
                        </a>
                      </div>

                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Impara con Linkedin
                          <p className='smallerTitle'>
                            Corsi per formare i tuoi dipendenti
                          </p>
                        </a>
                      </div>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Impara con Linkedin
                          <p className='smallerTitle'>
                            Corsi per formare i tuoi dipendenti
                          </p>
                        </a>
                      </div>

                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Admin Center
                          <p className='smallerTitle'>
                            Gestisci i dettagli di fatturazione e account
                          </p>
                        </a>
                      </div>
                      <div className='my-3'>
                        <a href='#' className='linksChange'>
                          Admin Center
                          <p className='smallerTitle'>
                            Gestisci i dettagli di fatturazione e account
                          </p>
                        </a>
                      </div>

                      <div className=' d-flex align-items-center'>
                        <a className='linksChange'>Crea una pagina aziendale</a>
                        <GoPlus className='fs-4 text-decoration-none text-black ms-1 mt-1' />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Col>
          </Row>
        </Container>
      </Navbar>
                      <div className=' d-flex align-items-center'>
                        <a className='linksChange'>Crea una pagina aziendale</a>
                        <GoPlus className='fs-4 text-decoration-none text-black ms-1 mt-1' />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ProfileComponent from './components/ProfileComponent';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import Footer from './components/FooterComponent';
import PostsComponent from './components/PostsComponent';
import JobPageComponent from './components/JobPageComponent';

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        {/* <Route path="/" element={<HomeComponent />} /> */}
        <Route path='/profile' element={<ProfileComponent />} />
        <Route path='/' element={<PostsComponent />} />

        <Route path='/jobs' element={<JobPageComponent />} />
        {/* <Route path='*' element={<ErrorComponent />} />  */}
      </Routes>

      {<Footer />}
    </BrowserRouter>
  );
}

export default App;

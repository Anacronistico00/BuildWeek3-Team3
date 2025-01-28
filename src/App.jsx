import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ProfileComponent from './components/ProfileComponent';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <ProfileComponent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

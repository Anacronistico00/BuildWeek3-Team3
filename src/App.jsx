import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ProfileComponent from './components/ProfileComponent';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import AnalisiComponent from './components/AnalisiComponent';
import InformationComponent from './components/InformationComponent';
import ActivityComponent from './components/ActivityComponent';
import Experiences from './components/Experiences';
import Study from './components/Study';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <ProfileComponent />
    
  <AnalisiComponent />
  <InformationComponent />
  <ActivityComponent />
  <Experiences />
  <Study />
  <Skills />
  </>
  );
}

export default App;

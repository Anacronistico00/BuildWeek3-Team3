import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ProfileComponent from "./components/ProfileComponent";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />

        {/* <Route path='/jobs' element={<JobsComponent />} />
        <Route path='*' element={<ErrorComponent />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

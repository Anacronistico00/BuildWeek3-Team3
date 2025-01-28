import { Container } from "react-bootstrap";
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container className="footer pt-5">
      <div className="sbfooter-links">
        <div className="sbfooter-links_div">
          <div className="Ask-Modi ">
            <h5 className="fw-bold text-secondary">Informazioni</h5>
          </div>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Informativa sulla comunity professionale</p>
          </a>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">privacy e condizioni</p>
          </a>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Sales Solutions</p>
          </a>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Centro sicurezza</p>
          </a>
        </div>
        <div className="sbfooter-links_div">
          <div className="Ask-Modi fw-bold text-secondary">
            <h5 className="fw-bold text-secondary">Accessibilità</h5>
          </div>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Carriera</p>
          </a>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Opzioni per gli annunci pubblicitari</p>
          </a>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Mobile</p>
          </a>
        </div>
        <div className="sbfooter-links_div">
          <div className="Ask-Modi fw-bold text-secondary">
            <h5 className="fw-bold text-secondary">Talent solutions</h5>
          </div>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Soluzioni di Marketing</p>
          </a>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Publicità</p>
          </a>
          <a href="/..">
            <p className="mt-3 fw-bold text-secondary">Piccole imprese</p>
          </a>
        </div>
        <div className="sbfooter-links_div">
          <div className="icons-dgt">
            <div className="icons">
              <QuestionCircleFill />
            </div>
            <div className="Ask-Modi ">
              <h5 className="fw-bold text-secondary">Domande?</h5>
              <a href="#!">
                <p className=" text-secondary ">Visita il nostro Centro assistenza.</p>
              </a>
            </div>
          </div>
          <div className="icons-dgt">
            <div className="icons">
              <GearFill />
            </div>
            <div className="Ask-Modi mt-2 ">
              <h5 className="fw-bold text-secondary">Gestisci il tuo account e la tua privacy.</h5>
              <a href="#!">
                <p className="  text-secondary">Vai alle impostazioni</p>
              </a>
            </div>
          </div>
          <div className="icons-dgt">
            <div className="icons">
              <ShieldShaded />
            </div>
            <div className="Ask-Modi mt-2">
              <h5 className="fw-bold text-secondary">Trasparenza sui contenuti consigliati.</h5>
              <a href="#!">
                <p className="text-secondary">Scopri di piu sui contenuti consigliati</p>
              </a>
            </div>
          </div>
        </div>
        <div className="sbfooter-links_div">
          <div className="Ask-Modi mt-2">
            <h5 className="text-secondary">Seleziona lingua</h5>
          </div>

          <select>
            <option value="it">Italiano (Italiano)</option>
            <option value="ab">Arabe (Arabe)</option>
            <option value="en">English (English)</option>
            <option value="es">Español (Español)</option>
            <option value="fr">Français (Français)</option>
          </select>
        </div>
      </div>
      <hr />

      <div className="Ask-Modi">
        <h5 className="text-secondary">LinkedIn Corporation &copy; 2025</h5>
      </div>
    </Container>
  );
};
export default Footer;

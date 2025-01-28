import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <div className="Ask-Modi">
              <h5>Informazioni</h5>
            </div>
            <a href="/..">
              <p>Informativa sulla comunity professionale</p>
            </a>
            <a href="/..">
              <p>privacy e condizioni</p>
            </a>
            <a href="/..">
              <p>Sales Solutions</p>
            </a>
            <a href="/..">
              <p>Centro sicurezza</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <div className="Ask-Modi">
              <h5>Accessibilità</h5>
            </div>
            <a href="/..">
              <p>Carriera</p>
            </a>
            <a href="/..">
              <p>Opzioni per gli annunci pubblicitari</p>
            </a>
            <a href="/..">
              <p>Mobile</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <div className="Ask-Modi">
              <h5>Talent solutions</h5>
            </div>
            <a href="/..">
              <p>Soluzioni di Marketing</p>
            </a>
            <a href="/..">
              <p>Publicità</p>
            </a>
            <a href="/..">
              <p>Piccole imprese</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <div className="icons-dgt">
              <div className="icons">
                <QuestionCircleFill />
              </div>
              <div className="Ask-Modi">
                <h5>Domande?</h5>
                <a href="#!">
                  <p>Visita il nostro Centro assistenza.</p>
                </a>
              </div>
            </div>
            <div className="icons-dgt">
              <div className="icons">
                <GearFill />
              </div>
              <div className="Ask-Modi">
                <h5>Gestisci il tuo account e la tua privacy.</h5>
                <a href="#!">
                  <p>Vai alle impostazioni</p>
                </a>
              </div>
            </div>
            <div className="icons-dgt">
              <div className="icons">
                <ShieldShaded />
              </div>
              <div className="Ask-Modi">
                <h5>Trasparenza sui contenuti consigliati.</h5>
                <a href="#!" className="Consigliati">
                  <p>Scopri di piu sui contenuti consigliati</p>
                </a>
              </div>
            </div>
          </div>
          <div className="sb__footer-links_div">
            <div className="Ask-Modi">
              <h5>Seleziona lingua</h5>
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
        <div className="absolute">
          <div className="Ask-Modi">
            <h5>LinkedIn Corporation &copy; 2025</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

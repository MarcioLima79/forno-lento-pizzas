import Button from "@/components/atoms/Button/Button";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { orderUrl } from "@/data/contact";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-top">
          <h2 className="footer-order">Pronto para pedir?</h2>
          <Button
            as="a"
            variant="inverted"
            className="footer-button"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<FaWhatsapp aria-hidden="true" />}
          >
            Pedir pelo WhatsApp
          </Button>
        </div>
        <div className="footer-bottom">
          <div className="footer-social-links">
            <h3 className="footer-title">Acompanhe nossas redes sociais</h3>
            <a
              className="footer-social-link"
              href="https://www.instagram.com/fornolento.pelotas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              className="footer-social-link"
              href="https://www.facebook.com/fornolento.pelotas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </div>
          <small className="footer-copyright">
            © {new Date().getFullYear()} Forno &amp; Massa. Todos os direitos
            reservados.
          </small>
        </div>
      </div>
    </section>
  );
}

export default Footer;

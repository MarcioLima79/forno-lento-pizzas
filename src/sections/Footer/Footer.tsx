import Button from "@/components/Button/Button";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-top">
          <h2 className="footer-order">Pronto para pedir?</h2>
          <Button
            variant="inverted"
            className="footer-button"
            onClick={() =>
              document
                .getElementById("pedir")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Pedir pelo WhatsApp{" "}
            <a
              className="footer-social-link"
              href="https://wa.me/5553981173827"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
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

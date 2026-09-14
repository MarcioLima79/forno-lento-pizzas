import { FaInstagram } from "react-icons/fa6";

import Button from "../../components/Button/Button";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer__content">
        <div className="footer-top">
          <h2 className="footer__title">Pronto para pedir?</h2>
          <Button
            variant="inverted"
            onClick={() =>
              document
                .getElementById("pedir")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Faça seu pedido
          </Button>
        </div>
        <div className="footer-bottom">
          <h2 className="footer__title">Nossas redes sociais</h2>
          <div className="footer__socials">
            <a
              href="#"
              className="footer__social-link"
              aria-label="Instagram da Forno Lento Pizzas"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <p className="footer__phone">Pedidos: WhatsApp (53) 98117-3827</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

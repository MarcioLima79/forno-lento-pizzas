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
            className="footer__button"
            onClick={() =>
              document
                .getElementById("pedir")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Falar no WhatsApp
          </Button>
        </div>
        <div className="footer-bottom">
          <h2 className="footer__title">Nossas redes sociais</h2>
          <p>Pedidos: WhatsApp (53) 98117-3827</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

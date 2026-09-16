import { IoArrowForward } from "react-icons/io5";

import Button from "../../components/Button/Button";
import DeliveryMap from "../../components/DeliveryMap/DeliveryMap";
import "./Delivery.css";

function Delivery() {
  return (
    <section className="delivery" id="entrega">
      <div className="container delivery-inner">
        <div className="delivery-visual">
          <DeliveryMap />
        </div>

        <div className="delivery-content">
          <p className="delivery-eyebrow">Tele-entrega</p>

          <h2 className="delivery-title">Levamos nossas pizzas até você</h2>

          <p className="delivery-description">
            Fazemos entregas em Pelotas. Consulte a taxa para a sua região ou
            combine a retirada diretamente conosco.
          </p>

          <p className="delivery-availability">Atendimento todos os dias.</p>

          <Button
            className="delivery-button"
            icon={<IoArrowForward aria-hidden="true" />}
            onClick={() =>
              document
                .getElementById("pedir")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver como pedir
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Delivery;

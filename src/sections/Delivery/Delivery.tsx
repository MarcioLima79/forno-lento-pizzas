import { IoArrowForward } from "react-icons/io5";

import Button from "../../components/Button/Button";
import DeliveryMap from "../../components/DeliveryMap/DeliveryMap";
import "./Delivery.css";

function Delivery() {
  return (
    <section className="delivery" id="entrega">
      <div className="container delivery__inner">
        <div className="delivery__visual">
          <DeliveryMap />
        </div>

        <div className="delivery__content">
          <p className="delivery__eyebrow">Tele-entrega</p>

          <h2 className="delivery__title">Levamos nossas pizzas até você</h2>

          <p className="delivery__description">
            Fazemos entregas em Pelotas. Consulte a taxa para a sua região ou
            combine a retirada diretamente conosco.
          </p>

          <p className="delivery__availability">Atendimento todos os dias.</p>

          <Button
            className="delivery__button"
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

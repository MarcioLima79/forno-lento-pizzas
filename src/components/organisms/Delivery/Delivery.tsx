import { IoArrowForward } from "react-icons/io5";

import Button from "@/components/atoms/Button/Button";
import DeliveryMap from "@/components/atoms/DeliveryMap/DeliveryMap";
import { orderUrl } from "@/data/contact";
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
            as="a"
            className="delivery-button"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<IoArrowForward aria-hidden="true" />}
          >
            Ver como pedir
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Delivery;

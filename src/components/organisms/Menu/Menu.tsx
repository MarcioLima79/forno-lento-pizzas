import { IoArrowForward } from "react-icons/io5";
import PizzaCard from "@/components/molecules/PizzaCard/PizzaCard";
import { orderUrl } from "@/data/contact";
import { pizzas } from "@/data/pizzas";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu" id="cardapio">
      <div className="container">
        <div className="menu-head">
          <div>
            <p className="menu-eyebrow">Escolha o seu tamanho</p>
            <h2>Sabores artesanais</h2>
          </div>

          <a
            className="menu-order-link"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver como pedir
            <IoArrowForward aria-hidden="true" />
          </a>
        </div>

        <div className="menu-size-guide" aria-label="Tamanhos disponíveis">
          <span>Pequena · 20 cm</span>
          <span>Média · 25 cm</span>
          <span>Grande · 30 cm</span>
        </div>

        <div className="menu-grid">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.name} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;

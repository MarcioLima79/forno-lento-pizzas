import { IoArrowForward } from "react-icons/io5";
import { pizzas } from "../../data/pizzas";
import "./Menu.css";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function Menu() {
  return (
    <section className="menu" id="cardapio">
      <div className="container">
        <div className="menu-head">
          <div>
            <p className="menu-eyebrow">Escolha o seu tamanho</p>
            <h2>Sabores artesanais</h2>
          </div>

          <a className="menu-order-link" href="#pedir">
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
            <article className="pizza-card" key={pizza.name}>
              <h3 className="pizza-card-title">{pizza.name}</h3>

              <p className="pizza-card-description">{pizza.description}</p>

              <dl className="pizza-card-prices">
                {pizza.sizes.map((size) => (
                  <div className="pizza-card-price" key={size.name}>
                    <dt>
                      {size.name}
                      <small>{size.diameter} cm</small>
                    </dt>

                    <dd>{currencyFormatter.format(size.price)}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;

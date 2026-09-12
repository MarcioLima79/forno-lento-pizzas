import { MoveRight } from "lucide-react";
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
        <div className="menu__head">
          <div>
            <p className="menu__eyebrow">Escolha o seu tamanho</p>
            <h2>Sabores artesanais</h2>
          </div>

          <a className="menu__order-link" href="#pedir">
            Ver como pedir
            <MoveRight aria-hidden="true" />
          </a>
        </div>

        <div className="menu__size-guide" aria-label="Tamanhos disponíveis">
          <span>Pequena · 20 cm</span>
          <span>Média · 25 cm</span>
          <span>Grande · 30 cm</span>
        </div>

        <div className="menu__grid">
          {pizzas.map((pizza) => (
            <article className="pizza-card" key={pizza.name}>
              <h3 className="pizza-card__title">{pizza.name}</h3>

              <p className="pizza-card__description">{pizza.description}</p>

              <dl className="pizza-card__prices">
                {pizza.sizes.map((size) => (
                  <div className="pizza-card__price" key={size.name}>
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

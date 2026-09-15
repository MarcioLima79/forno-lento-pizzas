import type { Pizza } from "@/types/pizza";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

type PizzaCardProps = {
  pizza: Pizza;
};

function PizzaCard({ pizza }: PizzaCardProps) {
  return (
    <article className="pizza-card">
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
  );
}

export default PizzaCard;

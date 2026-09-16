import { useState } from "react";
import { IoArrowBack, IoCheckmark, IoClose } from "react-icons/io5";
import PizzaCard from "@/components/molecules/PizzaCard/PizzaCard";
import { pizzas } from "@/data/pizzas";
import type { Pizza, PizzaSize } from "@/types/pizza";
import "./PizzaSelection.css";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

type PizzaSelectionProps = {
  onBack: () => void;
};

type SelectedPizza = {
  pizza: Pizza;
  size: PizzaSize;
};

function PizzaSelection({ onBack }: PizzaSelectionProps) {
  const [selectedPizzas, setSelectedPizzas] = useState<SelectedPizza[]>([]);

  const handleSelect = (pizza: Pizza, sizeName: string) => {
    const size = pizza.sizes.find((item) => item.name === sizeName);

    if (size) {
      setSelectedPizzas((currentPizzas) => [...currentPizzas, { pizza, size }]);
    }
  };

  const handleSizeChange = (pizza: Pizza) => {
    setSelectedPizzas((currentPizzas) =>
      currentPizzas.filter((item) => item.pizza.name !== pizza.name),
    );
  };

  const handleRemove = (pizzaIndex: number) => {
    setSelectedPizzas((currentPizzas) =>
      currentPizzas.filter((_, index) => index !== pizzaIndex),
    );
  };

  const total = selectedPizzas.reduce(
    (sum, selectedPizza) => sum + selectedPizza.size.price,
    0,
  );

  return (
    <section className="pizza-selection">
      <div className="container">
        <button className="pizza-selection-back" type="button" onClick={onBack}>
          <IoArrowBack aria-hidden="true" />
          Voltar
        </button>

        <div className="pizza-selection-header">
          <p className="pizza-selection-eyebrow">Escolha o seu sabor</p>
          <h1>Monte seu pedido</h1>
          <p>
            Selecione uma pizza para consultar os tamanhos e escolher a melhor
            opção para você.
          </p>
        </div>

        <div className="pizza-selection-grid">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.name}
              pizza={pizza}
              isSelected={selectedPizzas.some(
                (item) => item.pizza.name === pizza.name,
              )}
              onSelect={handleSelect}
              onSizeChange={handleSizeChange}
            />
          ))}
        </div>

        {selectedPizzas.length > 0 ? (
          <div className="pizza-selection-summary" role="status">
            <div className="pizza-selection-summary-content">
              <p className="pizza-selection-summary-label">
                <IoCheckmark aria-hidden="true" />
                Seu pedido
              </p>

              <div className="pizza-selection-summary-items">
                {selectedPizzas.map((selectedPizza, index) => (
                  <div
                    className="pizza-selection-summary-item"
                    key={`${selectedPizza.pizza.name}-${index}`}
                  >
                    <div>
                      <h2>{selectedPizza.pizza.name}</h2>
                      <p>
                        Tamanho {selectedPizza.size.name.toLowerCase()} ·{" "}
                        {currencyFormatter.format(selectedPizza.size.price)}
                      </p>
                    </div>
                    <button
                      className="pizza-selection-summary-close"
                      type="button"
                      aria-label={`Remover ${selectedPizza.pizza.name}`}
                      onClick={() => handleRemove(index)}
                    >
                      <IoClose aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pizza-selection-summary-total">
                <span>Total</span>
                <strong>{currencyFormatter.format(total)}</strong>
              </div>
              <small>
                Troque o tamanho no card e selecione novamente para atualizar o
                valor.
              </small>
            </div>
          </div>
        ) : null}
        <p className="pizza-selection-disclaimer">
          Fotos reais e ilustrativas; não são fotos dos nossos produtos. A foto
          de Abóbora e alecrim representa uma pizza de vegetais.
        </p>
      </div>
    </section>
  );
}

export default PizzaSelection;

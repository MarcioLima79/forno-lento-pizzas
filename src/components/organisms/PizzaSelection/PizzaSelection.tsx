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
  const [selectedPizza, setSelectedPizza] = useState<SelectedPizza | null>(
    null,
  );

  const handleSelect = (pizza: Pizza, sizeName: string) => {
    const size = pizza.sizes.find((item) => item.name === sizeName);

    if (size) {
      setSelectedPizza({ pizza, size });
    }
  };

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
              isSelected={selectedPizza?.pizza.name === pizza.name}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {selectedPizza ? (
          <div className="pizza-selection-summary" role="status">
            <div>
              <p className="pizza-selection-summary-label">
                <IoCheckmark aria-hidden="true" />
                Sua escolha
              </p>
              <h2>{selectedPizza.pizza.name}</h2>
              <p>
                Tamanho {selectedPizza.size.name.toLowerCase()} · A partir de{" "}
                {currencyFormatter.format(selectedPizza.size.price)}
              </p>
              <small>
                Confirme o valor do tamanho e a disponibilidade no pedido.
              </small>
            </div>
            <button
              className="pizza-selection-summary-close"
              type="button"
              aria-label="Remover pizza selecionada"
              onClick={() => setSelectedPizza(null)}
            >
              <IoClose aria-hidden="true" />
            </button>
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

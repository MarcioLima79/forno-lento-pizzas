import { useState } from "react";
import Button from "@/components/atoms/Button/Button";
import { IoArrowForward, IoCheckmark } from "react-icons/io5";
import type { Pizza } from "@/types/pizza";
import "./PizzaCard.css";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

type PizzaCardProps = {
  pizza: Pizza;
  onSelect?: (pizza: Pizza, sizeName: string) => void;
  onSizeChange?: (pizza: Pizza) => void;
  isSelected?: boolean;
  selectable?: boolean;
};

function PizzaCard({
  pizza,
  onSelect,
  onSizeChange,
  isSelected = false,
  selectable = true,
}: PizzaCardProps) {
  const [selectedSizeName, setSelectedSizeName] = useState(pizza.sizes[0].name);
  const selectedSize = pizza.sizes.find(
    (size) => size.name === selectedSizeName,
  );
  const handleSizeChange = (sizeName: string) => {
    if (sizeName !== selectedSizeName) {
      setSelectedSizeName(sizeName as typeof selectedSizeName);
      onSizeChange?.(pizza);
    }
  };

  return (
    <article className="pizza-card">
      <img
        className="pizza-card-picture"
        src={pizza.picture}
        alt={`Pizza ${pizza.name}`}
      />
      <h3 className="pizza-card-title">{pizza.name}</h3>

      <p className="pizza-card-description">{pizza.description}</p>

      {selectable ? (
        <>
          <p className="pizza-card-size-label">Escolha o tamanho</p>
          <div
            className="pizza-card-sizes"
            role="radiogroup"
            aria-label={`Tamanhos da pizza ${pizza.name}`}
          >
            {pizza.sizes.map((size) => (
              <span
                className={`pizza-card-size ${
                  selectedSizeName === size.name
                    ? "pizza-card-size-selected"
                    : ""
                }`}
                key={size.name}
                role="radio"
                aria-checked={selectedSizeName === size.name}
                tabIndex={0}
                onClick={() => handleSizeChange(size.name)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleSizeChange(size.name);
                  }
                }}
              >
                {size.name}
              </span>
            ))}
          </div>

          <div className="pizza-card-action">
            <div className="pizza-card-price-display">
              <span>A partir de</span>
              <strong>
                {currencyFormatter.format(selectedSize?.price ?? pizza.price)}
              </strong>
            </div>
            <Button
              variant="inverted"
              type="button"
              className={`pizza-card-button${
                isSelected ? " pizza-card-button-selected" : ""
              }`}
              onClick={() => onSelect?.(pizza, selectedSizeName)}
              icon={
                isSelected ? (
                  <IoCheckmark aria-hidden="true" />
                ) : (
                  <IoArrowForward aria-hidden="true" />
                )
              }
            >
              {isSelected ? "Selecionada" : "Selecionar"}
            </Button>
          </div>
        </>
      ) : null}
    </article>
  );
}

export default PizzaCard;

import type { Pizza } from "@/types/pizza";
import pizzaNapolitana from "@/assets/pizza-napolitana.jpg";
import pizzaPortuguesa from "@/assets/pizza-portuguesa.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizzaQuatroQueijos from "@/assets/pizza-4-queijos.jpg";
import pizzaFrangoCatupiry from "@/assets/pizza-frango-catupiry.jpg";

export const pizzas: Pizza[] = [
  {
    picture: pizzaNapolitana,
    name: "Napolitana",
    description:
      "Molho de tomate, muçarela, tomate em rodelas, azeitonas e orégano.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 29.9 },
      { name: "Média", diameter: 25, price: 42.9 },
      { name: "Grande", diameter: 30, price: 53.9 },
    ],
    price: 29.9,
  },
  {
    picture: pizzaPortuguesa,
    name: "Portuguesa",
    description:
      "Molho de tomate, muçarela, presunto, ovos cozidos, cebola e azeitonas pretas.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 34.9 },
      { name: "Média", diameter: 25, price: 44.9 },
      { name: "Grande", diameter: 30, price: 45.9 },
    ],
    price: 34.9,
  },
  {
    picture: pizzaMargherita,
    name: "Margherita",
    description:
      "Molho de tomate, muçarela, tomate-cereja e manjericão fresco.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 32.9 },
      { name: "Média", diameter: 25, price: 40.9 },
      { name: "Grande", diameter: 30, price: 52.9 },
    ],
    price: 32.9,
  },
  {
    picture: pizzaCalabresa,
    name: "Calabresa",
    description:
      "Molho de tomate, muçarela, calabresa fatiada, cebola e azeitonas pretas.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 33.9 },
      { name: "Média", diameter: 25, price: 42.9 },
      { name: "Grande", diameter: 30, price: 53.9 },
    ],
    price: 33.9,
  },

  {
    picture: pizzaQuatroQueijos,
    name: "Quatro Queijos",
    description: "Molho branco, muçarela, provolone, parmesão e gorgonzola.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 35.9 },
      { name: "Média", diameter: 25, price: 45.9 },
      { name: "Grande", diameter: 30, price: 57.9 },
    ],
    price: 35.9,
  },
  {
    picture: pizzaFrangoCatupiry,
    name: "Frango com Catupiry",
    description: "Molho de tomate, muçarela, frango desfiado e catupiry.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 34.9 },
      { name: "Média", diameter: 25, price: 43.9 },
      { name: "Grande", diameter: 30, price: 54.9 },
    ],
    price: 34.9,
  },
];

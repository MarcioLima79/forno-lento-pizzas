import type { Pizza } from "@/types/pizza";
import pizzaPicture from "@/assets/pizza-picture.jpg";

export const pizzas: Pizza[] = [
  {
    picture: pizzaPicture,
    name: "Napolitana",
    description:
      "Molho de tomate, muçarela, tomate em rodelas, azeitonas e orégano.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 29 },
      { name: "Média", diameter: 25, price: 35 },
      { name: "Grande", diameter: 30, price: 41 },
    ],
    price: 29,
  },
  {
    picture: pizzaPicture,
    name: "Portuguesa",
    description:
      "Molho de tomate, muçarela, presunto, ovos cozidos, cebola e azeitonas pretas.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 32 },
      { name: "Média", diameter: 25, price: 38 },
      { name: "Grande", diameter: 30, price: 44 },
    ],
    price: 32,
  },
  {
    picture: pizzaPicture,
    name: "Margherita",
    description:
      "Molho de tomate, muçarela, tomate-cereja e manjericão fresco.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 28 },
      { name: "Média", diameter: 25, price: 34 },
      { name: "Grande", diameter: 30, price: 40 },
    ],
    price: 28,
  },
  {
    picture: pizzaPicture,
    name: "Calabresa",
    description:
      "Molho de tomate, muçarela, calabresa fatiada, cebola e azeitonas pretas.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 30 },
      { name: "Média", diameter: 25, price: 36 },
      { name: "Grande", diameter: 30, price: 42 },
    ],
    price: 30,
  },

  {
    picture: pizzaPicture,
    name: "Quatro Queijos",
    description: "Molho branco, muçarela, provolone, parmesão e gorgonzola.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 34 },
      { name: "Média", diameter: 25, price: 40 },
      { name: "Grande", diameter: 30, price: 46 },
    ],
    price: 34,
  },
  {
    picture: pizzaPicture,
    name: "Frango com Catupiry",
    description: "Molho de tomate, muçarela, frango desfiado e catupiry.",
    sizes: [
      { name: "Pequena", diameter: 20, price: 32 },
      { name: "Média", diameter: 25, price: 38 },
      { name: "Grande", diameter: 30, price: 44 },
    ],
    price: 32,
  },
];

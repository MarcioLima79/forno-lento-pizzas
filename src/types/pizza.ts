export interface PizzaSize {
  name: "Pequena" | "Média" | "Grande";
  diameter: 20 | 25 | 30;
  price: number;
}

export interface Pizza {
  name: string;
  description: string;
  sizes: PizzaSize[];
}

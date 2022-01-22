
export type CartProduct = {
  id: string;
  title: string;
  price: number;
  toppings: Ingredient[];
};

export type Cart = {
  products: CartProduct[];
};

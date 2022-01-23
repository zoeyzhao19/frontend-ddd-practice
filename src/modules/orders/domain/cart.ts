
export type CartProduct = {
  id: string;
  title: string;
  price: number;
  toppings: Ingredient[];
};

export type Cart = {
  products: CartProduct[];
};

export function contains(cart: Cart, product: CartProduct): boolean {
  return cart.products.some(({ id }) => id === product.id);
}

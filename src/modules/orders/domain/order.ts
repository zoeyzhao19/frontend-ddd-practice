import { Cart, CartProduct } from './cart'
import { User } from './user'

export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
  user: string;
  cart: Cart;
  created: string;
  status: OrderStatus;
};

export function addProduct(cart: Cart, product: CartProduct): Cart {
  return { ...cart, products: [...cart.products, product] }
}

export function contains(cart: Cart, product: CartProduct): boolean {
  return cart.products.some(({ id }) => id === product.id);
}

export function createOrder(user: User, cart: Cart): Order {
  return {
    user: user.id,
    cart,
    created: new Date().toISOString(),
    status: "new",
  };
}
import { Cart } from './cart'
import { Product } from './product'
import { User } from './user'
import { totalPrice } from './product'

export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
  user: string;
  cart: Cart;
  created: string;
  status: OrderStatus;
  total: number;
};

export function addProduct(cart: Cart, product: Product): Cart {
  return { ...cart, products: [...cart.products, product] }
}

export function contains(cart: Cart, product: Product): boolean {
  return cart.products.some(({ id }) => id === product.id);
}

export function createOrder(user: User, cart: Cart): Order {
  return {
    user: user.id,
    cart,
    created: new Date().toISOString(),
    status: "new",
    total: totalPrice(cart.products),
  };
}
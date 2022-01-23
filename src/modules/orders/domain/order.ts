import { Cart } from './cart'
import { User } from './user'

export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
  user: string;
  cart: Cart;
  created: string;
  status: OrderStatus;
  total: number;
};

export function createOrder(user: User, cart: Cart, total: number): Order {
  return {
    user: user.id,
    cart,
    created: new Date().toISOString(),
    status: "new",
    total: total,
  };
}
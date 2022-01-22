import { useStore } from "@/modules/orders/store";
import { Order } from '@/modules/orders/domain/order'
import { User } from '@/modules/orders/domain/user'
import { Cart } from "../domain/cart";

interface IOrderStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

interface ICartStorageService {
  emptyCart(): void;
  cart: Cart
}

interface IUserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export function useCartStorage(): ICartStorageService {
  return useStore();
}

export function useOrderStorage(): IOrderStorageService {
  return useStore();
}

export function useUserStorage(): IUserStorageService {
  return useStore()
}
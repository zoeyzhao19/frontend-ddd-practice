import { Order } from '@/domain/order'

export interface IOrderStorageService {
  updateOrders(orders: Order[]): void;
}

export interface INotificationService {
  notify(message: string): void;
}

export interface IPaymentService {
  tryPay(amount: number): Promise<boolean>;
}

export interface ICartStorageService {
  emptyCart(): void;
}
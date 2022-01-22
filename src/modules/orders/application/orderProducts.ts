import { User } from '@/modules/orders/domain/user';
import { Cart } from '@/modules/orders/domain/cart';
import { createOrder } from '@/modules/orders/domain/order';
import { usePayment } from '@/modules/orders/services/paymentService';
import { useNotifier } from '@/modules/orders/services/notificationService';
import { useCartStorage, useOrderStorage } from "@/modules/orders/services/storageService";

/**
 * 下单用例
 * @returns
 */
export function useOrderProducts() {
  const payment = usePayment();
  const notifier = useNotifier();
  const orderStorage = useOrderStorage();
  const cartStorage = useCartStorage();

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart);
  
    const paid = await payment.tryPay(order);
  
    if (!paid) return notifier.notify("Oops! 🤷");
  
    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
  }

  return {orderProducts}
}


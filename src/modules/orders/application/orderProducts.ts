import { createOrder } from '@/modules/orders/domain/order';
import { usePayment } from '@/modules/orders/services/paymentService';
import { useNotifier } from '@/shared/services/notificationService';
import { useGlobalStore } from '@/shared/services'
import { totalPrice } from '@/modules/products/domain/product'

/**
 * 下单用例
 * @returns
 */
export function useOrderProducts() {
  const payment = usePayment();
  const notifier = useNotifier();
  const { user, cart, emptyCart, orders, updateOrders } = useGlobalStore();

  async function orderProducts() {
    const order = createOrder(user!, cart, totalPrice(cart.products));
  
    const paid = await payment.tryPay(order);
  
    if (!paid) return notifier.notify("Oops! 🤷");
    updateOrders([...orders, order]);
    emptyCart();
  }

  return {orderProducts}
}


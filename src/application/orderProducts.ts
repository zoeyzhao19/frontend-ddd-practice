import { User } from '@/domain/user';
import { Cart } from '@/domain/cart';
import { createOrder } from '@/domain/order';
import { usePayment } from '@/services/paymentService';
import { useNotifier } from '@/services/notificationService';

async function orderProducts(user: User, cart: Cart) {
  const order = createOrder(user, cart);
  const payment = usePayment();
  const notifier = useNotifier();

  const paid = await payment.tryPay(order.total);

  if (!paid) return notifier.notify("Oops! 🤷");

  // const { orders } = orderStorage;
  // orderStorage.updateOrders([...orders, order]);
  // cartStorage.emptyCart();
}
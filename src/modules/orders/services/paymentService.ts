import { fakeApi } from "../apis";
import { Order } from "../domain/order";

interface IPaymentService {
  tryPay(order: Order): Promise<boolean>;
}

export function usePayment(): IPaymentService {
  return {
    tryPay(order: Order) {
      return fakeApi(true);
    },
  };
}
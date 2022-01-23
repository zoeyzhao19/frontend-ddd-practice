import { Product } from "../domain/product";
import { hasAllergy, User } from "@/modules/auth/domain/user";
import { addProduct } from "../domain/cart";

import { useGlobalStore } from "@/shared/services";
import { useNotifier } from "@/shared/services";

export function useAddToCart() {
  const { cart, updateCart } = useGlobalStore();
  const notifier = useNotifier();

  function addToCart(user: User, product: Product): void {
    const warning = "This cookie is dangerous to your health! 😱";
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));
    if (isDangerous) return notifier.notify(warning);

    const updated = addProduct(cart, product);
    updateCart(updated);
  }

  return { addToCart };
}
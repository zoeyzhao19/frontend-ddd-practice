import { contains } from "@/modules/products/domain/cart";
import { Product } from "@/modules/products/domain/product";

import { useGlobalStore } from '@/shared/services';
import { useAddToCart } from '@/modules/products/application';
import styles from "./index.module.css";
import { Toppings } from "./Toppings";

type CookieProps = {
  cookie: Product;
};

export function Cookie({ cookie }: CookieProps) {
  const { user, cart } = useGlobalStore();
  const { addToCart } = useAddToCart();

  return (
    <article className={styles.cookie}>
      <span className={styles.image}>🍪</span>
      <span className={styles.title}>{cookie.title}</span>
      <Toppings cookie={cookie} />

      {!!user && (
        <button type="button" onClick={() => addToCart(user, cookie)}>
          {cookie.price / 100} ₽
        </button>
      )}

      {contains(cart, cookie) && (
        <span className={styles.contains}>In your cart</span>
      )}
    </article>
  );
}
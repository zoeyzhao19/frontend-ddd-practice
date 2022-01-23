import { totalPrice } from "@/modules/products/domain/product";
import { useGlobalStore } from "@/shared/services";
import { Cookie } from "@/components/Cookie";
import styles from "./index.module.css";

export function Cart() {
  const { cart } = useGlobalStore();

  return (
    <section>
      <h2>Cart</h2>

      <ul className={styles.list}>
        {cart.products.map((product, index) => (
          <li key={index}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  );
}
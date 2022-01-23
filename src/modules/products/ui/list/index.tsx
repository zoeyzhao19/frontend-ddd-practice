import { useEffect, useState } from 'react';
import { Product } from "@/modules/products/domain/product";
import styles from "./index.module.css";
import { useProducts } from '@/modules/products/services'
import { Cookie } from '@/components/Cookie'

export function ProductList() {
  const products = useProducts()
  const [list, setList] = useState<Product[]>([]);
  useEffect(() => {
    products.getList().then(res => {
      setList(res)
    })
  }, [products])

  return (
    <main className={styles.main}>
      <h1>Cookies</h1>

      <ul className={styles.list}>
        {list.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
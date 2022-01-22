import { Link } from "react-router-dom";
import { useUserStore } from "@/modules/auth/services";
import styles from "./Header.module.css";

export function Header() {
  const { user } = useUserStore();
  // const { cart } = useCartStorage();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Co0o0o0o0okie!!!1 🍪
      </Link>

      {!user ? (
        <Link to="/auth">Log in</Link>
      ) : (
        <Link to="/user">
          {user.name}
          {/* {user.name} ({cart.products.length}) */}
        </Link>
      )}
    </header>
  );
}
import { Link } from "react-router-dom";
import { useGlobalStore } from "@/shared/services";
import { useLocation } from 'react-router-dom';
import styles from "./index.module.css";

export function Header() {
  const { user } = useGlobalStore();
  const location = useLocation();
  console.log('location', location);
  // const { cart } = useCartStorage();

  return (
    <div className={styles.header}>
      <Link className={styles.logo} to="/">
        Co0o0o0o0okie!!!1 🍪
      </Link>
      {
        user && <Link to="/user">
        {user.name}
        {/* {user.name} ({cart.products.length}) */}
      </Link>
      }
      {!user && location.pathname !== '/auth' && 
        <Link to="/auth">Log in</Link>
      }
    </div>
  );
}
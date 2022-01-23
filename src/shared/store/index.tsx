import React, { useState } from "react";
import { useContext } from "react";
import { User } from '@/modules/auth/domain/user'
import { Cart } from '@/modules/products/domain/cart'
import { Order } from '@/modules/orders/domain/order'

interface IStore {
  user: User | null;
  updateUser: React.Dispatch<React.SetStateAction<User | null>>;
  cart: Cart;
  updateCart: React.Dispatch<React.SetStateAction<Cart>>;
  emptyCart: () => void;
  orders: Order[];
  updateOrders: React.Dispatch<React.SetStateAction<Order[]>>
}

const StoreContext = React.createContext<IStore>({} as IStore);
export const useUserStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Cart>({products: []});
  const [orders, setOrders] = useState<Order[]>([]);

  const value = {
    user,
    updateUser: setUser,
    cart,
    updateCart: setCart,
    emptyCart: () => setCart({ products: [] }),
    orders,
    updateOrders: setOrders
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
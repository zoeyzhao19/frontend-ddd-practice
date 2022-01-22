import React, { useState } from "react";
import { useContext } from "react";
import { User } from '@/modules/auth/domain/user'

interface IUserStore {
  user: User | null;
  updateUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const StoreContext = React.createContext<IUserStore>({} as IUserStore);
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const value = {
    user,
    updateUser: setUser,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
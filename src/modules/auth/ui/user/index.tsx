
import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'
import { useGlobalStore } from "@/shared/services";
import { Profile } from "./components/Profile";
import { Cart } from './components/Cart'
import { Buy } from './components/Buy'
import { Orders } from './components/Orders'

export function User() {
  const { user } = useGlobalStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) navigate('/auth');
  }, [user, navigate])

  return (
    <>
      {
        user &&
        <main style={{"marginTop": '100px', 'marginLeft': '100px'}}>
          <Profile />
          <Orders />
          <Cart />
          <Buy />
        </main>
      }
    </>
    
  );
}
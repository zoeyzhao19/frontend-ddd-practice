
import { useAuth } from '@/modules/auth/services'
import { useGlobalStore } from '@/shared/services'

export function useAuthenticate() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.

  // The use case function doesn't call third-party services directly,
  // instead, it relies on the interfaces we declared earlier.
  const userStore = useGlobalStore();
  const auth = useAuth();

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function authenticate(name: string, email: string): Promise<void> {
    if(!name || !email) {
      alert('请输入用户信息')
      return
    }
    const user = await auth.auth(name, email);
    userStore.updateUser(user);
  }

  return {
    user: userStore.user,
    authenticate,
  };
}
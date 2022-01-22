
import { useUserStore, useAuth } from '@/modules/auth/services'

export function useAuthenticate() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.

  // The use case function doesn't call third-party services directly,
  // instead, it relies on the interfaces we declared earlier.
  const userStore = useUserStore();
  const auth = useAuth();

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function authenticate(name: string, email: string): Promise<void> {
    const user = await auth.auth(name, email);
    userStore.updateUser(user);
  }

  return {
    user: userStore.user,
    authenticate,
  };
}